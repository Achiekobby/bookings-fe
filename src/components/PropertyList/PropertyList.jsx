import React from 'react'
import  hotels  from "../../images/property_type/Hotel_Room.jpg"
import  apartments  from "../../images/property_type/apartments.jpg"
import  resorts  from "../../images/property_type/resort.jpg"
import  villas  from "../../images/property_type/villa.jpg"
import "../../Styles/Css/PropertyList.css"
import {FaLayerGroup} from "react-icons/fa"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pCard">
        <div className="pListItem">
            <div className="pTypeImage">
            <img className="pImage" src={hotels} alt="" />
            </div>
            <div className="pListTitles">
                <div className="title">
                    <FaLayerGroup className="typeIcon"/>
                    <h1>Hotels</h1>
                </div>
                <h2>233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <div className="pTypeImage">
            <img className="pImage" src={apartments} alt="" />
            </div>
            <div className="pListTitles">
                <div className="title">
                    <FaLayerGroup className="typeIcon"/>
                    <h1>Apartments</h1>
                </div>
                <h2>1500 Apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <div className="pTypeImage">
            <img className="pImage" src={resorts} alt="" />
            </div>
            <div className="pListTitles">
                <div className="title">
                    <FaLayerGroup className="typeIcon"/>
                    <h1>Resorts</h1>
                </div>
                <h2>50 Resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <div className="pTypeImage">
            <img className="pImage" src={villas} alt="" />
            </div>
            <div className="pListTitles">
                <div className="title">
                    <FaLayerGroup className="typeIcon"/>
                    <h1>Villas</h1>
                </div>
                <h2>100 Villas</h2>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PropertyList