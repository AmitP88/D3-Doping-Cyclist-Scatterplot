const getData = () => {
    d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json", (error, dataset) => {
        if (error) console.log(error);
        console.log(dataset);

        const w = 700;
        const h = 400;

        /* Padding between SVG canvas boundary and the plot */
        const padding = 40;

        /* formatted Time for time data */
        const formatTime = d3.timeFormat("%M:%S"); // for creating axes only
        const parseTime = d3.timeParse("%M:%S");

        /* Scale for x-axis */
        let x_min = d3.min(dataset, (d) => Date.parse(d.Year));
        let x_max = d3.max(dataset, (d) => Date.parse(d.Year));
        const xScale = d3.scaleTime()
                         .domain([x_min, x_max])
                         .range([padding, w - padding]);

        /* Scale for y-axis */
        let y_min = d3.min(dataset, (d) => parseTime(d.Time));
        let y_max = d3.max(dataset, (d) => parseTime(d.Time));
        const yScale = d3.scaleTime()
                         .domain([y_min, y_max])
                         .range([h - padding, padding]);

        /* Add an SVG Canvas */
        const svg = d3.select(".container")
                      .append("svg")
                      .attr("class", "canvas");

        /* Add data points to SVG Canvas as scatterplot */
        svg.selectAll("circle")
           .data(dataset)
           .enter()
           .append("circle")
           .attr("cx", (d) => xScale(Date.parse(d.Year)))
           .attr("cy", (d) => yScale(parseTime(d.Time)))
           .attr("r", 5);

        /* Added x and y axes to the left and bottom of the svg canvas */
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale).tickFormat(formatTime);
        svg.append("g")
        .attr("id", "x-axis")
        .attr("transform", "translate(-5, " + (h - padding) + ")")
        .call(xAxis);

        svg.append("g")
           .attr("id", "y-axis")
           .attr("transform", "translate(" + 35 + ",0)")
           .call(yAxis);

    })
}