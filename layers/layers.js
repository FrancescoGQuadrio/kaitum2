var wms_layers = [];


        var lyr_kakka_0 = new ol.layer.Tile({
            'title': 'kakka :)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ferrovia_1 = new ol.format.GeoJSON();
var features_Ferrovia_1 = format_Ferrovia_1.readFeatures(json_Ferrovia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferrovia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrovia_1.addFeatures(features_Ferrovia_1);
var lyr_Ferrovia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferrovia_1, 
                style: style_Ferrovia_1,
                popuplayertitle: "Ferrovia",
                interactive: true,
                title: '<img src="styles/legend/Ferrovia_1.png" /> Ferrovia'
            });
var format_Rifugio_2 = new ol.format.GeoJSON();
var features_Rifugio_2 = format_Rifugio_2.readFeatures(json_Rifugio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rifugio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rifugio_2.addFeatures(features_Rifugio_2);
var lyr_Rifugio_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rifugio_2, 
                style: style_Rifugio_2,
                popuplayertitle: "Rifugio",
                interactive: true,
                title: '<img src="styles/legend/Rifugio_2.png" /> Rifugio'
            });
var format_tappe_3 = new ol.format.GeoJSON();
var features_tappe_3 = format_tappe_3.readFeatures(json_tappe_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tappe_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tappe_3.addFeatures(features_tappe_3);
var lyr_tappe_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tappe_3, 
                style: style_tappe_3,
                popuplayertitle: "tappe",
                interactive: true,
    title: 'tappe<br />\
    <img src="styles/legend/tappe_3_0.png" /> 1<br />\
    <img src="styles/legend/tappe_3_1.png" /> 2<br />\
    <img src="styles/legend/tappe_3_2.png" /> 3<br />\
    <img src="styles/legend/tappe_3_3.png" /> 4<br />\
    <img src="styles/legend/tappe_3_4.png" /> 5<br />\
    <img src="styles/legend/tappe_3_5.png" /> 6<br />\
    <img src="styles/legend/tappe_3_6.png" /> 7<br />'
        });
var format_Partenzaearrivo_4 = new ol.format.GeoJSON();
var features_Partenzaearrivo_4 = format_Partenzaearrivo_4.readFeatures(json_Partenzaearrivo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Partenzaearrivo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Partenzaearrivo_4.addFeatures(features_Partenzaearrivo_4);
var lyr_Partenzaearrivo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Partenzaearrivo_4, 
                style: style_Partenzaearrivo_4,
                popuplayertitle: "Partenza e arrivo",
                interactive: true,
                title: '<img src="styles/legend/Partenzaearrivo_4.png" /> Partenza e arrivo'
            });
var format_Tragitto_5 = new ol.format.GeoJSON();
var features_Tragitto_5 = format_Tragitto_5.readFeatures(json_Tragitto_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tragitto_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tragitto_5.addFeatures(features_Tragitto_5);
var lyr_Tragitto_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tragitto_5, 
                style: style_Tragitto_5,
                popuplayertitle: "Tragitto",
                interactive: true,
    title: 'Tragitto<br />\
    <img src="styles/legend/Tragitto_5_0.png" /> Acqua<br />\
    <img src="styles/legend/Tragitto_5_1.png" /> Terra<br />'
        });
var format_Rapida_6 = new ol.format.GeoJSON();
var features_Rapida_6 = format_Rapida_6.readFeatures(json_Rapida_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rapida_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rapida_6.addFeatures(features_Rapida_6);
var lyr_Rapida_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rapida_6, 
                style: style_Rapida_6,
                popuplayertitle: "Rapida",
                interactive: true,
    title: 'Rapida<br />\
    <img src="styles/legend/Rapida_6_0.png" /> evitare<br />\
    <img src="styles/legend/Rapida_6_1.png" /> valutare<br />\
    <img src="styles/legend/Rapida_6_2.png" /> attenzione<br />'
        });

lyr_kakka_0.setVisible(true);lyr_Ferrovia_1.setVisible(true);lyr_Rifugio_2.setVisible(true);lyr_tappe_3.setVisible(true);lyr_Partenzaearrivo_4.setVisible(true);lyr_Tragitto_5.setVisible(true);lyr_Rapida_6.setVisible(true);
var layersList = [lyr_kakka_0,lyr_Ferrovia_1,lyr_Rifugio_2,lyr_tappe_3,lyr_Partenzaearrivo_4,lyr_Tragitto_5,lyr_Rapida_6];
lyr_Ferrovia_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_Rifugio_2.set('fieldAliases', {'nome': 'nome', });
lyr_tappe_3.set('fieldAliases', {'numero': 'numero', });
lyr_Partenzaearrivo_4.set('fieldAliases', {'id': 'id', 'vaiovieni': 'vaiovieni', });
lyr_Tragitto_5.set('fieldAliases', {'Terrain': 'Terrain', });
lyr_Rapida_6.set('fieldAliases', {'Difficolta': 'Difficolta', });
lyr_Ferrovia_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Rifugio_2.set('fieldImages', {'nome': 'TextEdit', });
lyr_tappe_3.set('fieldImages', {'numero': 'TextEdit', });
lyr_Partenzaearrivo_4.set('fieldImages', {'id': 'TextEdit', 'vaiovieni': '', });
lyr_Tragitto_5.set('fieldImages', {'Terrain': 'TextEdit', });
lyr_Rapida_6.set('fieldImages', {'Difficolta': 'TextEdit', });
lyr_Ferrovia_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'inline label - always visible', 'type': 'no label', });
lyr_Rifugio_2.set('fieldLabels', {'nome': 'no label', });
lyr_tappe_3.set('fieldLabels', {'numero': 'no label', });
lyr_Partenzaearrivo_4.set('fieldLabels', {'id': 'no label', 'vaiovieni': 'no label', });
lyr_Tragitto_5.set('fieldLabels', {'Terrain': 'no label', });
lyr_Rapida_6.set('fieldLabels', {'Difficolta': 'no label', });
lyr_Rapida_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});