let data = []

function songValidation(){

    event.preventDefault()
    let songName=inputSongName.value
    let bandArtistName=inputBandArtistName.value
    let songDuration=parseInt(inputSongDuration.value)



    let validationSongName = false
    let validationBandArtistName = false
    let validationDuration = false

    if (songName.length === 0){
        errorName.innerHTML = "enter name of song"
        
    } else {
        validationSongName = true
    }

    if (bandArtistName.length === 0 ){
        errorBandArtist.innerHTML = "enter name of band artist"
    } else {
        validationBandArtistName = true
        
    }

    if ( songDuration < 300 ) {
        validationDuration= true
    }else{
        errorDuration.innerHTML = "Duration must be less then 300 seconds"
    }

    if (validationSongName === true && validationBandArtistName === true && validationDuration === true){
        let tmp={
            songName,
            bandArtistName,
            songDuration
        };

        data.push(tmp);
        let tableLayout=`<tr>
        <th>Song Name</th>
        <th>BandArtist Name</th>
        <th>Song Duration</th>
        </tr>`;

        for (let i=0; i<data.length; i++){
            tableLayout+=`<tr>
            <td>${data[i].songName}</td>
            <td>${data[i].bandArtistName}</td>
            <td>${data[i].songDuration}</td>
            </tr>`;
        }

        songTable.innerHTML = tableLayout
    }

   
}