let snackbar_wrapper = null;
let snackbar_close_button = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>';
const snackbar = {
  default: (message) => {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = message + snackbar_close_button;
    snackbar_wrapper.style.visibility = 'visible';
    snackbar.hide(x);
  },

  success: (message) => {
    var x = document.getElementById("snackbar");
    x.className = "success show";
    x.innerHTML = message + snackbar_close_button;
    snackbar_wrapper.style.visibility = 'visible';
    snackbar.hide(x);
  },

  info: (message) => {
    var x = document.getElementById("snackbar");
    x.className = "info show";
    x.innerHTML = message + snackbar_close_button;
    snackbar_wrapper.style.visibility = 'visible';
    snackbar.hide(x);
  },

  primary: (message) => {
    var x = document.getElementById("snackbar");
    x.className = "primary show";
    x.innerHTML = message + snackbar_close_button;
    snackbar_wrapper.style.visibility = 'visible';
    snackbar.hide(x);
  },

  warning: (message) => {
    var x = document.getElementById("snackbar");
    x.className = "warning show";
    x.innerHTML = message + snackbar_close_button;
    snackbar_wrapper.style.visibility = 'visible';
    snackbar.hide(x);
  },

  error: (message) => {
    var x = document.getElementById("snackbar");
    x.className = "danger show";
    x.innerHTML = message + snackbar_close_button;
    snackbar_wrapper.style.visibility = 'visible';
    snackbar.hide(x);
  },

  hide: (element) => {
    let close = element.querySelector('button');
    close.addEventListener('click', () => {
      element.className = element.className.replace("show", "");
      snackbar_wrapper.style.visibility = 'hidden';
    });
    setTimeout(function() {
      element.className = element.className.replace("show", "");
      snackbar_wrapper.style.visibility = 'hidden';
    }, 3000);
  }
};

(() => {
  if (document.querySelector("#snackbar") == null) {
    const container = document.createElement('div');
    container.id = 'snackbar';
    document.body.appendChild(container);

    snackbar_wrapper = document.createElement('div');
    snackbar_wrapper.className = 'snackbar-wrapper';
    document.body.appendChild(snackbar_wrapper);
  }
})();