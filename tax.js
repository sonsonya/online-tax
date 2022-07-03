
function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parts.join(",");
}

function tax() {

    const salary = parseInt(document.getElementById("number1").value)

    let rate = 0;
    if(salary <50000000){
        rate = 0.05
    } 
    if (salary >= 50000000 && salary < 250000000){
        rate = 0.15
    }
    if (salary >= 250000000 && salary < 500000000){
        rate = 0.25
    }
    if (salary >= 500000000){
        rate = 0.3
    }
    let income = salary * 12
    let first = (salary*2) * rate
    let second = (salary*8) * (rate+0.1)
    let third = (salary*2) * (rate+0.2)
    let tax = first + second + third
    document.getElementById('result').innerHTML = `
        <div>======TAXATION SCHEME=======<br>
        Personal Income : ${numberWithCommas(salary)}<br>
        Annual Taxable Income : ${numberWithCommas(income)}<br>
        Annual Tax Income : ${numberWithCommas(tax)}
        </div>
    `
}

function tax_relief(){

    const salary = parseInt(document.getElementById("salary").value)
    var profile = document.getElementById('profile');
    var value = profile.options[profile.selectedIndex].value;

    let relief = 0;
    let status = "";

    switch(value){
        case 'TK0':
            relief = 54000000
            status = "Single"
            break;
        case 'K0':
            relief = 58500000
            status = "Married with no dependant"
            break;
        case 'K1':
            relief = 63000000
            status = "Married with 1 dependant"
            break;
        case 'K2':
            relief = 67500000
            status = "Married with 2 dependant"
            break;
        case 'K3':
            relief = 72000000
            status = "Married with 3 dependant"
            break;
    }

    let taxable = (salary * 12) - relief
    let tax = 0;
    if(profile === "TK0"){
        let first = 0.05 * (salary*2)
        let second = 0.15 * (taxable - (salary*2))
        tax = first + second
    } else {
        tax = 0.05 * taxable
    }
    document.getElementById('result2').innerHTML = `
    <div>======TAXATION SCHEME=======<br>
    Personal Income : ${numberWithCommas(salary)}<br>
    Personal Profile : ${numberWithCommas(status)}<br>
    Annual Taxable Income : ${numberWithCommas(taxable)}<br>
    Annual Tax Income : ${numberWithCommas(tax)}
    </div>
`
}