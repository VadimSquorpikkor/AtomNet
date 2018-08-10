function get_act() {

    let pov_date = new Date(2016, 9, 12);
    let today = new Date();
    //let today = new Date.now();
    //today.now();

    let days_left = ((today.getTime() - pov_date.getTime()) / (1000*60*60*24));

    let t_pol = 365.25 * 30.17; //Период полураспада цезия 137 в днях
    let a0_516 = 91.3;
    let a0_517 = 88.8;
    let a0_518 = 94.6;
    let a0_519 = 88.2;
    let a0_520 = 91.3;
    let a0_521 = 93.5;

    let a_516 = a0_516 * Math.exp(-0.693/t_pol * days_left);
    let a_517 = a0_517 * Math.exp(-0.693/t_pol * days_left);
    let a_518 = a0_518 * Math.exp(-0.693/t_pol * days_left);
    let a_519 = a0_519 * Math.exp(-0.693/t_pol * days_left);
    let a_520 = a0_520 * Math.exp(-0.693/t_pol * days_left);
    let a_521 = a0_521 * Math.exp(-0.693/t_pol * days_left);

    /*let today2 = new Date();
    let dd = today2.getDate();
    let mm = today2.getMonth()+1; //January is 0!
    let yyyy = today2.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    today2 = mm + '/' + dd + '/' + yyyy;*/

    document.getElementById('516').value = a_516;
    document.getElementById('517').value = a_517;
    document.getElementById('518').value = a_518;
    document.getElementById('519').value = a_519;
    document.getElementById('520').value = a_520;
    document.getElementById('521').value = a_521;
}