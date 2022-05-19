/**
 * This function creates a Bootstrap alert with the color, message, className, and bootstrapVersion
 * that you pass in.
 * @param color - The color of the alert using bootstrap class color.
 * @param message - The message you want to display to the user.
 * @param className - The class of the div that you want to append the alert to.
 * @param bootstrapVersion - The version of bootstrap you're using the code support 4 and 5 only.
 */
function alertUser(color, message, className, bootstrapVersion) {
  let alert = document.querySelector(`.${className}`);
  let div = document.createElement('div');
  div.setAttribute('class', `alert alert-${color} alert-dismissible fade show`);
  div.setAttribute('role', 'alert');
  div.textContent = message;
  let button = document.createElement('button');

  if (bootstrapVersion === 5 || bootstrapVersion === "5") {
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'btn-close');
    button.setAttribute('data-bs-dismiss', 'alert');
  } else if (bootstrapVersion === 4 || bootstrapVersion === "4") {
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'close');
    button.setAttribute('data-dismiss', 'alert');
    let span = document.createElement('span');
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = "&times;";
    button.appendChild(span);
  }
  button.setAttribute('aria-label', 'Close');
  div.appendChild(button);
  alert.appendChild(div);
}
