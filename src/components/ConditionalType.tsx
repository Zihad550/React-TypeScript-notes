import React from "react";

type PropsType = {
  status: "loading" | "success" | "error";
};
const ConditionalType = ({ status }: PropsType) => {
  let massage;
  if (status === "loading") {
    massage = "Loading...";
  } else if (status === "success") {
    massage = "Successfully fetched";
  } else if (status === "error") {
    massage = "Error while fetching data";
  }
  return (
    <div>
      <h2>Status - {massage}</h2>
    </div>
  );
};

export default ConditionalType;
