import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Brands } from "styled-components";

const brands: Brands = {
  facebook: {
    color: "#3b5998",
    contrast: "#fff",
    icon: <FaFacebook />,
  },
  github: {
    color: "#333",
    contrast: "#fff",
    icon: <FaGithub />,
  },
  google: {
    color: "#ea4335",
    contrast: "#fff",
    icon: <FaGoogle />,
  },
  instagram: {
    color: "#e1306c",
    contrast: "#fff",
    icon: <FaInstagram />,
  },
  twitter: {
    color: "#1da1f2",
    contrast: "#fff",
    icon: <FaTwitter />,
  },
};

export default brands;
