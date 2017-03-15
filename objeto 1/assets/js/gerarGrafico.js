		function grafico() {
			$(document).ready(function () {


				// Gera o gráfico
				Highcharts.chart('scene4Graph', {
					chart: {
						plotBackgroundColor: null,
						plotBorderWidth: null,
						plotShadow: false,
						type: 'pie'
					},
					title: {
						text: 'Quantidade de frutas que o fulano comeu'
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					plotOptions: {
						pie: {
							allowPointSelect: true,
							cursor: 'pointer',
							dataLabels: {
								enabled: false
							},
							showInLegend: true
						}
					},
					series: [{
						name: 'Fruta',
						colorByPoint: true,
						data: [{
							name: 'Maçã',
							y: 2
						}, {
							name: 'Melância',
							y: 1
		
						}, {
							name: 'Banana',
							y: 4
						}, {
							name: 'Mamão',
							y: 1
						}, {
							name: 'Pêssego',
							y: 3
						}]
					}]
				});
			});
			}