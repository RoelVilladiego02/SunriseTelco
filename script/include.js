document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-include]').forEach(element => {
        const filePath = element.getAttribute('data-include');
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
                element.querySelectorAll('script').forEach(script => {
                    eval(script.text);
                });
            })
            .catch(error => console.error('Error loading component:', error));
    });
});
