import React from "react";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div class="loader">
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="wineglass left">
        <div class="top"></div>
      </div>
      <div class="wineglass right">
        <div class="top"></div>
      </div>
    </div>
  );
}
