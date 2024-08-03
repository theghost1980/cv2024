import { t } from "i18next";
import React from "react";
import { Verify } from "react-puzzle-captcha";
import "react-puzzle-captcha/dist/react-puzzle-captcha.css";
import { Icon, IconPathName } from "../icon/icon";
import "./captcha.css";

interface Props {
  width: number;
  height: number;
  next_action_title?: string;
  showResult: (result: "success" | "fail") => void;
}

const Captcha = ({ next_action_title, width, height, showResult }: Props) => {
  return (
    <div className="full-overlay">
      <div className="captcha-container">
        <Icon
          iconPathName={IconPathName.CLOSE}
          width={30}
          height={30}
          color="var(--darker-tone)"
          onClick={() => showResult("fail")}
          additionalClassName="close-icon"
        />
        <h2 className="sub-header-title-italic disclaimer">
          {t("captcha.disclaimer")}
        </h2>
        <Verify
          width={width ?? 200}
          height={height ?? 150}
          visible={true}
          onSuccess={() => showResult("success")}
          onFail={() => showResult("fail")}
          //   onRefresh={() => alert("refresh")} note: uncomment and use when needed
        />
        {next_action_title && (
          <h2 className="sub-header-title-italic next-action-title">
            {next_action_title}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Captcha;
