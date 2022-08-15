import React from 'react'
import '../components/RouteForm.css'
function RouteForm() {
  return (
    <div>RouteForm
        <form align="center">
            <legend htmlfor="source">
                Source
            </legend>
            <input type="text" id="source" name="source" placeholder="eg. panvel" />

            <legend htmlfor="destination">
                Destination
            </legend>
            <input type="text" id="destination" name="destination" placeholder="eg. kurla"/>

            <legend htmlfor="time">
              Time
            </legend>
            <input type="time" id="time" name="time" placeholder="eg. kurla"/>

            <button type="submit" value="submit">Submit</button>

        </form>
    </div>
   
  )
}

export default RouteForm