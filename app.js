const getData = () => {
    d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json", (error, dataset) => {
        if (error) console.log(error);
        console.log(dataset);

        const w = 1000;
        const h = 500;

        /* Padding between SVG canvas boundary and the plot */
        const padding = 40;

        /* Scale for x-axis */
        let x_min = d3.min(dataset, (d) => d.Time);
        let x_max = d3.max(dataset, (d) => d.Time);
        const xScale = d3.scaleTime()
                         .domain([x_min, x_max])
                         .range([padding, w - padding]);

        /* Scale for y-axis */
        let y_min = d3.min(dataset, (d) => d.Year);
        let y_max = d3.max(dataset, (d) => d.Year);
        const yScale = d3.scaleTime()
                         .domain([0, y_max])
                         .range([h - padding, padding]);

        /* Add an SVG Canvas */
        const svg = d3.select("container")
                      .append("svg")
                      .attr("class", "canvas");

        /* Add data points to SVG Canvas as scatterplot */
        
        

    })
}