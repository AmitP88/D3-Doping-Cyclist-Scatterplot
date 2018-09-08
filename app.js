const getData = () => {
    d3.json("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json", (error, data) => {
      if (error) console.log(error);
      console.log(data);
    })
}