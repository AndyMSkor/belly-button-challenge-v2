console.log("this is a test")

//create variable
const testing_data = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(testing_data).then(function(data) {
    console.log(data);
});

function buildingTheCharts(sample) {
    console.log("building the charts");
    dj.json(testing_data).then(function(data)) {
        console.log("building the charts")
        console.log(data);


        let samples = data.samples
        console.log(samples)

        let sampArray = samples.filter(sampleObject => sampleObject.id == sample);
        console.log(sampArray);

        let sampResult = sampArray[0];
        console.log(sampResult);


        let samples = sampResult.samples;
        console.log(samplesinStudy);

        let otu_ids = sampResult.otu_ids;
        console.log(otu_ids);

        let otu_labels = sampResult.otu_labels;
        console.log(otu_labels);


        let TraceBubbleChart = {
            x: otu_ids,
            y: samples,
            mode: 'markers',
            marker: {
                size: samples,
                color: otu_ids,
                colorscale: 'Y1GnBu'


            }
            


        }


        let Bubble = [TraceBubbleChart];


        let layoutBubble = {
            title: "Bacteria in Data Sample",
            showlegend: false,
            xaxis: {title: "OTU ID"},
            yaxis: {title: "Samples in Study"}


        }

        Plotly.newPlot('bubble', Bubble, layoutBubble);




        let dataBarChart = [{
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).reverse().map(otuID => 'OTU ${otuID}').reverse(),
            text: otu_labels.slice(0,10).reverse(),
            type: 'bar',
            orientation: "h"
        }];

        let layoutBar = {
            title: "Top Ten Bacteria Found in Sample",
        }

        Plotly.newPlot('bar', dataBarChart, layoutBar);




    
    
    
    
    
    }

}


function buildingtheMeta(sample) {
    d3.json(sample_data).then(function(data)) {
        console.log("this is a metadata test")
        console.log(data);

        let metadata = data.metadata;
        console.log(metadata);

        let ArrayMetaData = metadata.filter(metadataObject => metadataObject.id == sample);
        console.log(ArrayMetaData);

        let ResultMeta = ArrayMetaData[0];
        console.log(ResultMeta);


        let metaPanel = d3.select("#sample-metadata");

        metaPanel.html("");

        for (key in ResultMeta) {
            metaPanel.append("h5").text('${key.toUpperCase()}: ${metadataResult[key]}');
        };
    }
}

function optionHasChanged(newSample) {
    buildingTheCharts(newSample);
    buildingtheMeta(newSample);
};













function initialize() {
    d3.json(sample_data).then(function (data)) {
        let sampleNames = data.names;
        console.log(sampleNames);

        let pullDown = d3.select("#selDataset");

        for (let index = 0; index < sampleNames.length; index++) {
            pullDown
                .append("option")
                .text(sampleNames[index])
                .property("value", sampleNames[index])
            };

    

    let theFirstSample = sampleNames[0];
    }
    buildingTheCharts(theFirstSample);
    buildingtheMeta(theFirstSample);

};