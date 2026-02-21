import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  top: 5.2rem;
  left: 2rem;
  z-index: 3;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 999px;
  padding: 0.3rem 0.8rem;
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.accent};
    box-shadow: 0 0 8px 4px ${(props) => props.theme.accent}40;
  }
`;

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { state: { showIntro: true } });
  };

  return (
    <Button onClick={handleBack} aria-label="Go back">
      Back
    </Button>
  );
};

export default BackButton;
