const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const notes = [
  {
    title: "Stop by Whole Foods",
    text: "pick up almond milk, and eggs",
  },

  {
    title: "Kids dinner",
    text: "the kids want pizza for dinner tonight",
  },
];
