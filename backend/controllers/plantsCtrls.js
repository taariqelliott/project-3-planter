

const getPlants = (req, res) => {
  const PlantDataBase = async () => {
    // make api call and get response
    const response = await fetch('https://perenual.com/api/species-list?page=1&key=sk-pdyK642b684e0b8c3421');
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data

    if(!data) {
      res.status(404).json({message: "Cannot find Plants"})
    } else {
      res.status(200).json({data})
    }
  };

  return PlantDataBase()
  
}

module.exports = {getPlants}