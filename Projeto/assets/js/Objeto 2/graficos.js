	function graficoGasNatural() {
				// Gera o gráfico
				Highcharts.chart('containerGraficos', {
					chart: {
						type: 'column',
						options3d: {
							enabled: true
						}
					},
					credits: {
						enabled: false
					},
					title: {
						text: 'Gás natural'
					},
					yAxis: {
						plotLines: [{
							color:'green',
							value: '60284.2',
							width: '2',
							zIndex: 5
						},
						{
							color:'orange',
							value: '69003',
							width: '2',
							zIndex: 5	
						}]
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					series: [{
						name: 'Gás Natural',
						colorByPoint: true,
						data: [{
							name: '2011',
							y: 25095
						}, {
							name: '2012',
							y: 46760

						}, {
							name: '2013',
							y: 69003
						}, {
							name: '2014',
							y: 81073
						}, {
							name: '2015',
							y: 79490
						}
						]
					}]
				});
			}