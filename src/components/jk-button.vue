<template>
  <a class="jk-button jk-button-primary" href="//m.ruguoapp.com/messages/59d7f34824831b0016c511ba">
    关注</a>
</template>

<style lang="scss">
.jk-button {
  display: inline-block;
  line-height: 1;
  color: #404040;
  white-space: nowrap;
  cursor: pointer;
  background: transparent;
  border: 1px solid #404040;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.6em 1.3em;
  border-radius: 1.6em;
}

[data-dpr="1"] .jk-button {
  font-size: 14px;
}

[data-dpr="2"] .jk-button {
  font-size: 28px;
}

[data-dpr="3"] .jk-button {
  font-size: 42px;
}

.jk-button-primary {
  background-color: #ffe411;
  border-color: #ffe411;
}

.jk-button-text {
  border: none;
  color: #ffe411;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
}

.jk-button[touched],
.jk-button:hover {
  opacity: 0.7;
}

.jk-button-large {
  /*font-weight: bold;*/
}

[data-dpr="1"] .jk-button-large {
  font-size: 16px;
}

[data-dpr="2"] .jk-button-large {
  font-size: 32px;
}

[data-dpr="3"] .jk-button-large {
  font-size: 48px;
}

.jk-button-is-block {
  display: block;
  padding-top: 0.9em;
  padding-bottom: 0.9em;
}

.jk-button-is-shaking {
  -webkit-animation: tada 4s linear 1s infinite;
  animation: tada 4s linear 1s infinite;
}

@-webkit-keyframes tada {
  20%, from, to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  2%, 4% {
    -webkit-transform: scale3d(0.95, 0.95, 0.95) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.95, 0.95, 0.95) rotate3d(0, 0, 1, -3deg);
  }

  10%, 14%, 18%, 6% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, 3deg);
  }

  12%, 16%, 8% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, -3deg);
  }
}

@keyframes tada {
  20%, from, to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  2%, 4% {
    -webkit-transform: scale3d(0.95, 0.95, 0.95) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.95, 0.95, 0.95) rotate3d(0, 0, 1, -3deg);
  }

  10%, 14%, 18%, 6% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, 3deg);
  }

  12%, 16%, 8% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.05, 1.05, 1.05) rotate3d(0, 0, 1, -3deg);
  }
}
</style>
