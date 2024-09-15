// script
async function copyToClipboard(element) {
    try {
        await navigator.clipboard.writeText(element.innerText);
        showNotification();
    } catch (err) {
        console.error('复制失败: ', err);
    }
}
function showNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(function() {
        notification.style.display = 'none';
        }, 2000);
}