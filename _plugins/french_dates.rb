module FrenchDates
    MONTHS = {
        "01" => "janvier",     "02" => "février",   "03" => "mars",       "04" => "avril",
        "05" => "mail",        "06" => "juin",      "07" => "juillet",    "08" => "août",
        "09" => "septembre",   "10" => "octobre",   "11" => "novembre",   "12" => "décembre"
    }

    def year_and_month_to_french(date)
        MONTHS[date[0..2]] + ' ' + date[2..4]
    end

    Liquid::Template.register_filter self
end
