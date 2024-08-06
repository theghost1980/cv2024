import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Form, useNavigate } from "react-router-dom";
import { checkMail } from "../../utils/mail";
import {
  BackgroundImage,
  BgImageFileName,
} from "../common/background-image/background-image";
import { Button } from "../common/button/button";
import Captcha from "../common/captcha/captcha";
import CvDownloadOverlay from "../common/cv-download-overlay/cv-download-overlay";
import { Icon, IconPathName } from "../common/icon/icon";
import SendLoader from "../common/send-loader/send-loader";
import "./get-in-touch.css";

export const SOCIAL_URL_LIST = {
  facebook: "https://www.facebook.com/saturno.mangieri",
  linkedin: "https://www.linkedin.com/in/saturno-mangieri/",
  github: "https://github.com/theghost1980",
};

const DEFAULT_CONTACT_FORM: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const GetInTouch = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>();
  const [loading, setLoading] = useState(false);
  const [loadCaptcha, setLoadCaptcha] = useState(false);
  const [captchaResult, setCaptchaResult] = useState<"success" | "fail" | "">(
    ""
  );
  const [form, setForm] = useState<ContactForm>(DEFAULT_CONTACT_FORM);
  const [errorMessage, setErrorMessage] = useState({
    triggered: false,
    error: "error.mail",
    solution: "error.alternative_solution",
  });
  const [showCVDownloadOverlay, setShowCVDownloadOverlay] = useState(false);

  const navigate = useNavigate();

  const handleErrorMessage = (value: boolean) => {
    setErrorMessage((prev) => {
      return { ...prev, triggered: value };
    });
  };

  const clearFormData = () => {
    setForm(DEFAULT_CONTACT_FORM);
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    if (Object.values(form).every((f) => f.trim().length > 0)) {
      if (!checkMail()) {
        console.log(t("error.mail"));
        handleErrorMessage(true);
        setTimeout(() => {
          clearFormData();
          handleErrorMessage(false);
        }, 8000);
      } else {
        setLoadCaptcha(true);
      }
    }
  };

  useEffect(() => {
    if (captchaResult === "success") {
      setLoading(true);
      console.log({ v: process.env.emailJS }); //TODO remove after fix
      emailjs
        .sendForm(
          "miscontactosdecelular",
          "template_0x1c7h8",
          formRef.current,
          {
            publicKey: process.env.emailJS,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        )
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        });
      clearFormData();
    }
    setLoadCaptcha(false);
  }, [captchaResult]);

  const handleSetDataForm = (name: string, value: string) => {
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleShowCVOverlay = () => {
    setShowCVDownloadOverlay(true);
    setTimeout(() => {
      setShowCVDownloadOverlay(false);
    }, 6000);
  };

  return (
    <main className="get-in-touch-page">
      {showCVDownloadOverlay && <CvDownloadOverlay />}
      <BackgroundImage
        bgImageFileName={BgImageFileName.CONTACT}
        overlayColor={{
          red: 235,
          blue: 237,
          green: 235,
          alpha: 0.2,
        }}
      />
      <BackgroundImage
        bgImageFileName={BgImageFileName.GET_IN_TOUCH_SATURNO}
        additionalClassname="saturno-overlay"
      />
      <section className="contact-section">
        <div className="contact-divider">
          <div className="contact-info">
            <div className="text-centered">
              <h3 className="header-title-small title-1">
                {t("contact.title_1")}
              </h3>
              <h4 className="text-content-soft title-2">
                {t("contact.title_2")}
              </h4>
              <p className="text-decription disclaimer text-centered text-shadow-light">
                {t("contact.disclaimer")}
              </p>
            </div>
            <div className="sub-content">
              <ul className="ul-list-row">
                <li>
                  <Icon
                    iconPathName={IconPathName.FACEBOOK}
                    width={40}
                    height={40}
                    color="var(--ceruleo-medium)"
                    onClick={() => open(SOCIAL_URL_LIST.facebook)}
                  />
                </li>
                <li>
                  <Icon
                    iconPathName={IconPathName.LINKEDIN}
                    width={40}
                    height={40}
                    color="var(--ceruleo-medium)"
                    onClick={() => open(SOCIAL_URL_LIST.linkedin)}
                  />
                </li>
                <li>
                  <Icon
                    iconPathName={IconPathName.GITHUB}
                    width={40}
                    height={40}
                    color="var(--ceruleo-medium)"
                    onClick={() => open(SOCIAL_URL_LIST.github)}
                  />
                </li>
                <li>
                  <Icon
                    iconPathName={IconPathName.DOWNLOAD}
                    width={40}
                    height={40}
                    color="var(--ceruleo-medium)"
                    onClick={handleShowCVOverlay}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-form">
            {errorMessage.triggered && (
              <div className="div-col-around send-loader">
                <h4 className="header-title-small text-centered side-margin-max">
                  {t(errorMessage.error)}
                </h4>
                <h3 className="header-title-small text-centered side-margin-max">
                  {t(errorMessage.solution)}
                </h3>
                <Button
                  title={"ok"}
                  buttonStyleType={"agressive"}
                  onClick={() => {
                    clearFormData();
                    handleErrorMessage(false);
                  }}
                />
              </div>
            )}
            {!loading && !errorMessage.triggered && (
              <Form onSubmit={handleSubmitForm} ref={formRef}>
                <label className="title-italic" htmlFor="name">
                  {t("common.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type={"text"}
                  value={form.name}
                  onChange={(e) => handleSetDataForm("name", e.target.value)}
                />
                <label className="title-italic" htmlFor="email">
                  {t("common.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type={"email"}
                  value={form.email}
                  onChange={(e) => handleSetDataForm("email", e.target.value)}
                />
                <label className="title-italic" htmlFor="subject">
                  {t("common.subject")}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type={"text"}
                  value={form.subject}
                  onChange={(e) => handleSetDataForm("subject", e.target.value)}
                />
                <label className="title-italic" htmlFor="message">
                  {t("common.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => handleSetDataForm("message", e.target.value)}
                />
                <button
                  type={"submit"}
                  className="button agressive btn-submit"
                  title={t("contact.submit_button_title")}
                >
                  {t("button.submit")}
                </button>
              </Form>
            )}
            {loading && (
              <div className="div-col-centered send-loader">
                <SendLoader />
              </div>
            )}
            <h3
              className="header-title-small visit-faq"
              onClick={() => navigate("/faq")}
            >
              {t("contact.visit_faq")}
            </h3>
          </div>
        </div>
      </section>
      {loadCaptcha && (
        <Captcha
          next_action_title={t("captcha.next_action", {
            action: t("captcha.action.will_send_message"),
          })}
          width={300}
          height={180}
          showResult={(res) => setCaptchaResult(res)}
        />
      )}
    </main>
  );
};

export default GetInTouch;
