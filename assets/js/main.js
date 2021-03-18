function check() {
    let inn = (document.getElementById("input").value);
    let innArr = inn.split('');
    let coefficient = [-1,5,7,9,4,6,10,5,7,0];
    let sum = 0;
    let date = new Date(1899, 11, 31);
    console.log(date);
    let gender = '';
    let INN = {
        code: inn
    };

    if (innArr.length == 10) {
        console.log(innArr)

        for (let i = 0; i < innArr.length; i++) {
            sum += innArr[i] * coefficient[i];
        }

        console.log(sum);

        let controlNumber = sum % 11;
        console.log(controlNumber)

        if (controlNumber > 9) {
            controlNumber %= 10;
            console.log(controlNumber);
        }

        if (controlNumber == innArr[9]) {
            console.log('YES');
            INN.isCorrect = true;
            if (innArr[8] % 2 == 0) {
                console.log('Woman')
                INN.sex = "female";
            }else{
                console.log('Man');
                INN.sex = "male";
            }
            
            let days = +inn.slice(0,5);
            date.setDate(date.getDate() + days);
            let today = new Date();
            INN.dateOfBirth = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();

            INN.fullYears = today.getFullYear() - date.getFullYear();
            console.log(INN.fullYears);
            if (today.getMonth() < date.getMonth() || today.getMonth() == date.getMonth() && today.getDay() < date.getDay()) {
                --INN.fullYears;
            }
        }else{
            console.log('NO');
            INN.isCorrect = false;
        }
    }else {
        INN.isCorrect = false;
        if (innArr.length == 0) {
            document.getElementById("feedback0").innerHTML = 'Рядок пустий'
        }
        else if (innArr.length < 10) {
            document.getElementById("feedback0").innerHTML = `Вы ввели номер не повністю, потрібно ввсети ще ${10 - innArr.length}`;
        }else if (innArr.length > 10) {
            document.getElementById("feedback0").innerHTML = `Ви ввели забагато цифер, потрібно прибрати ${innArr.length - 10}`;
        }
    }
    console.log(INN);
    document.getElementById("feedback1").innerHTML = INN.code;
    document.getElementById("feedback2").innerHTML = INN.isCorrect;
    if (INN.isCorrect == true) {
        document.getElementById("feedback3").innerHTML = INN.sex;
        document.getElementById("feedback4").innerHTML = INN.dateOfBirth;
        document.getElementById("feedback5").innerHTML = INN.fullYears;
    }else{
        document.getElementById("feedback3").innerHTML = '';
        document.getElementById("feedback4").innerHTML = '';
        document.getElementById("feedback5").innerHTML = '';
    }
}
