if(localStorage.passedIds !== undefined && localStorage.passedIds != '') {
    for(let i = 0; i < localStorage.passedIds.split(',').length; i++) {
        document.getElementById(localStorage.passedIds.split(',')[i]).style.display = 'none';
        document.getElementById(localStorage.passedIds.split(',')[i]).nextElementSibling.style.opacity = 1;
    }
}
{% include js/actions.js %}
{% include js/textarea.js %}