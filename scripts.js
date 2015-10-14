google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Champions', 'Percentage'],
        ['Mordekaiser - ADC', 58.24],
        ['Lux - Mid', 54.86],
        ['Blitzcrank - Support', 54.02],
        ['Annie - Mid', 53.97],
        ['Wukong - Top', 53.63],
        ['Malphite - Top', 53.57],
        ['Karthus - Top', 53.53],
        ['Amumu - Jungle', 53.4],
        ['Zyra - Support', 53.2],
        ['Malzahar - Mid', 53.18]
    ]);

    var options = {
        title: 'Win Percentage of Top 10 Champions',
        chartArea: {width: '20%'},
        hAxis: {
            title: 'Percentage',
            minValue: 50

        },
        vAxis: {
            title: 'Champions'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div1'));

    chart.draw(data, options);
}

google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic2);

function drawBasic2() {

    var data = google.visualization.arrayToDataTable([
        ['Year', 'Number of Players'],
        ['2011', 11500000],
        ['2012', 12000000],
        ['2013(Active players at one time)', 5000000],
        ['2014 - Mid', 67000000]
    ]);

    var options = {
        title: 'Win Percentage of Top 10 Champions',
        chartArea: {width: '20%'},
        hAxis: {
            title: 'Percentage',
            minValue: 4500000

        },
        vAxis: {
            title: 'Champions'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));

    chart.draw(data, options);
}