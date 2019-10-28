$(".datapicker").datepicker({
        format: 'dd/mm/yyyy',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        currentText: "Hoje",
        gotoCurrent: true,
        dayNames: getDiasSemana("cp"),
        dayNamesMin: getDiasSemana("sc"),
        dayNamesShort: getDiasSemana("ct"),
        monthNames: getNomeMeses("cp"),
        monthNamesShort: getNomeMeses("ct"),
        nextText: "Próximo",
        prevText: "Anterior",
        showOtherMonths: true
    });