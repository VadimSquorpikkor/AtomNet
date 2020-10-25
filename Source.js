/**
 * Класс источника
 *
 */
class RA_Source {
    //подумать, нужно ли имя, с одной стороны будет имя экземпляра класса, с другой стороны —
    //мало ли где понадобится getName()
    constructor(name, element, activity_0, povDate) {
        this._name = name;
        this._element = element;
        this._activity_0 = activity_0;
        this._povDate = povDate;
    }

    /**Имя источника*/
    get getName() {
        return this._name;
    }

    /**Химический элемент*/
    get getElement() {
        return this._element;
    }

    /**Активность источника в день поверки — начальнаяя активность*/
    get getActivity_0() {
        return this._activity_0;
    }

    /**День поверки (дата, месяцы начинаются с 0)*/
    get getPovDate() {
        return this._povDate;
    }

    get getActivityNow() {
        // a0, pov_date, t_pol
        let a0 = this._activity_0;
        let t_pol = this._element.period;
        let pov_date = this._povDate;
        let days_left = (new Date().getTime() - pov_date.getTime()) / (1000*60*60*24);
        let act = a0 * Math.exp(-0.693147/t_pol * days_left);
        return act.toFixed(3);
    }


}
