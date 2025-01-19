const form = document.querySelector('.login-form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let allFieldsFilled = true;
            for (let element of form.elements) {
                if (element.tagName === 'INPUT' && element.value.trim() === '') {
                    allFieldsFilled = false;
                    break;
                }
            }
            if (!allFieldsFilled) {
                alert('All form fields must be filled in');
                return;
            }

            const formData = {};
            for (let element of form.elements) {
                if (element.tagName === 'INPUT') {
                    formData[element.name] = element.value.trim(); 
                }
            }
            console.log(formData);
            form.reset();
        });