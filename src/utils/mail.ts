export const checkMail = () => {
  if (window && window.localStorage) {
    const actual = localStorage.getItem("m_2024_API");
    if (!actual || actual === "null") {
      localStorage.setItem("m_2024_API", JSON.stringify({ c_2024: 1 }));
    } else if (actual) {
      let parsed = JSON.parse(actual);
      if (parsed.c_2024 && +parsed.c_2024 >= 2) {
        return false;
      } else {
        localStorage.setItem(
          "m_2024_API",
          JSON.stringify({ c_2024: parsed.c_2024 + 1 })
        );
      }
    }
    return true;
  }
};
