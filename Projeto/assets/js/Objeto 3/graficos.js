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


			function graficoHidreletrica() {
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
						text: 'Hidrelétrica'
					},
					yAxis: {
						plotLines: [{
							color:'green',
							value: '393629.8',
							width: '2',
							zIndex: 5
						},
						{
							color:'orange',
							value: '390992',
							width: '2',
							zIndex: 5	
						}]
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					series: [{
						name: 'Hidrelétrica',
						colorByPoint: true,
						data: [{
							name: '2011',
							y: 428333
						}, {
							name: '2012',
							y: 415342

						}, {
							name: '2013',
							y: 390992
						}, {
							name: '2014',
							y: 373439
						}, {
							name: '2015',
							y: 359743
						}
						]
					}]
				});
			}


			function graficoPetroleo() {
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
						text: 'Derivados de Petróleo'
					},
					yAxis: {
						plotLines: [{
							color:'green',
							value: '21546.8',
							width: '2',
							zIndex: 5
						},
						{
							color:'orange',
							value: '22090',
							width: '2',
							zIndex: 5	
						}]
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					series: [{
						name: 'Derivados de Petróleo',
						colorByPoint: true,
						data: [{
							name: '2011',
							y: 12239
						}, {
							name: '2012',
							y: 16214

						}, {
							name: '2013',
							y: 22090
						}, {
							name: '2014',
							y: 32529
						}, {
							name: '2015',
							y: 25662
						}
						]
					}]
				});
			}




			function graficoCarvao() {
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
						text: 'Carvão'
					},
					yAxis: {
						plotLines: [{
							color:'green',
							value: '13437.8',
							width: '2',
							zIndex: 5
						},
						{
							color:'orange',
							value: '14801',
							width: '2',
							zIndex: 5	
						}]
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					series: [{
						name: 'Carvão',
						colorByPoint: true,
						data: [{
							name: '2011',
							y: 6485
						}, {
							name: '2012',
							y: 8422

						}, {
							name: '2013',
							y: 14801
						}, {
							name: '2014',
							y: 18385
						}, {
							name: '2015',
							y: 19096
						}
						]
					}]
				});
			}



			function graficoNuclear() {
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
						text: 'Nuclear'
					},
					yAxis: {
						plotLines: [{
							color:'green',
							value: '15493.6',
							width: '2',
							zIndex: 5
						},
						{
							color:'orange',
							value: '15659',
							width: '2',
							zIndex: 5	
						}]
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					series: [{
						name: 'Nuclear',
						colorByPoint: true,
						data: [{
							name: '2011',
							y: 15659
						}, {
							name: '2012',
							y: 16038

						}, {
							name: '2013',
							y: 15659
						}, {
							name: '2014',
							y: 15378
						}, {
							name: '2015',
							y: 14734
						}
						]
					}]
				});
			}



			function graficoBiomassa() {
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
						text: 'Biomassa'
					},
					yAxis: {
						plotLines: [{
							color:'green',
							value: '39671',
							width: '3',
							zIndex: 5
						},
						{
							color:'orange',
							value: '39679',
							width: '2',
							zIndex: 5	
						}]
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					series: [{
						name: 'Biomassa',
						colorByPoint: true,
						data: [{
							name: '2011',
							y: 31633
						}, {
							name: '2012',
							y: 34662

						}, {
							name: '2013',
							y: 39679
						}, {
							name: '2014',
							y: 44987
						}, {
							name: '2015',
							y: 47394
						}
						]
					}]
				});
			}



			function graficoEolica() {
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
						text: 'Eolica'
					},
					yAxis: {
						plotLines: [{
							color:'green',
							value: '9633.8',
							width: '2',
							zIndex: 5
						},
						{
							color:'orange',
							value: '6578',
							width: '2',
							zIndex: 5	
						}]
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					series: [{
						name: 'Eolica',
						colorByPoint: true,
						data: [{
							name: '2011',
							y: 2705
						}, {
							name: '2012',
							y: 5050

						}, {
							name: '2013',
							y: 6578
						}, {
							name: '2014',
							y: 12210
						}, {
							name: '2015',
							y: 21626
						}
						]
					}]
				});
			}



			function graficoOutras() {
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
						text: 'Outras'
					},
					yAxis: {
						plotLines: [{
							color:'green',
							value: '11838.2',
							width: '2',
							zIndex: 5
						},
						{
							color:'orange',
							value: '12241',
							width: '2',
							zIndex: 5	
						}]
					},
					tooltip: {
						pointFormat: '{series.name}: <b>{point.y}</b>'
					},
					series: [{
						name: 'Outras',
						colorByPoint: true,
						data: [{
							name: '2011',
							y: 9609
						}, {
							name: '2012',
							y: 10010

						}, {
							name: '2013',
							y: 12241
						}, {
							name: '2014',
							y: 13590
						}, {
							name: '2015',
							y: 13741
						}
						]
					}]
				});
			}