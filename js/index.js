/**
 * Bootstrap is required
 * @param {String} message //Text to be shown
 * @param {String} type //primary , secondary, success, danger, warning, info, light, dark
 */
function UserAlert(message, type = "light", placeHolder = "#liveAlertPlaceholder") {
    const alertPlaceholder = document.querySelector(placeHolder);
    alertPlaceholder.innerHTML = "";
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
}

function ClearUserAlert(placeHolder = "#liveAlertPlaceholder") {
    const alertPlaceholder = document.querySelector(placeHolder);
    alertPlaceholder.innerHTML = "";
}