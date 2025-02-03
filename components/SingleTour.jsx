"use client";
import React, { useEffect } from "react";
import BookingWidget from "./BookingWidget";
import Schedule from "./Schedule";
import SliderContainer from "./SliderContainer";
import Hearts from "./Hearts";
import SchedulePhone from "./SchedulePhone";
import { useGlobalContext } from "../contexts/globalContext";

const TourPage = ({ tour_data, totaltours }) => {
  const { set_tours } = useGlobalContext();
  useEffect(() => {
    set_tours(totaltours);
  }, []);
  let icon_filtering = {
    smallgroup: (
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jhifpp"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="PeopleAltOutlinedIcon"
      >
        <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"></path>
      </svg>
    ),
    duration3hours: (
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="AccessAlarmOutlinedIcon"
      >
        <path d="m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>
      </svg>
    ),
    skiptheline: (
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="FastForwardOutlinedIcon"
      >
        <path d="M15 9.86 18.03 12 15 14.14V9.86m-9 0L9.03 12 6 14.14V9.86M13 6v12l8.5-6L13 6zM4 6v12l8.5-6L4 6z"></path>
      </svg>
    ),
    smallgrouptour: (
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jhifpp"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="PeopleAltOutlinedIcon"
      >
        <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"></path>
      </svg>
    ),
    mobileticketing: (
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="MobileFriendlyOutlinedIcon"
      >
        <path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27-5.91 5.93z"></path>
      </svg>
    ),
    freecancellation: (
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jhifpp"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="CancelOutlinedIcon"
      >
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path>
      </svg>
    ),
    livetourguide: (
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="RecordVoiceOverOutlinedIcon"
      >
        <path d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27l-1.68 1.69zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path>
      </svg>
    ),
    expressentrance: (
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jhifpp"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="BoltIcon"
      >
        <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"></path>
      </svg>
    ),
    instantconfirmation: (
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="CheckCircleOutlineOutlinedIcon"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path>
      </svg>
    ),
    exclusiveexperience: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-zreh0f"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="StarRateIcon"
      >
        <path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z"></path>
      </svg>
    ),
    privatetour: (
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jhifpp"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="PeopleAltOutlinedIcon"
      >
        <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"></path>
      </svg>
    ),
  };
  useEffect(() => {
    window.alert = function () {
      console.log("Alert blocked!"); // Or do nothing
    };
    // for the map view
    const map = L.map("map").setView([0, 0], 2); // Initial placeholder view

    // Fetch coordinates from Nominatim API
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${tour_data.location
        .toLowerCase()
        .replaceAll(" ", "+")}`
    )
      .then((response) => response.json())
      .then((data) => {
        const lat = data[0].lat;
        const lon = data[0].lon;

        // Set the map to the location
        map.setView([lat, lon], 12);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
        }).addTo(map);

        // Add marker
        L.marker([lat, lon])
          .addTo(map)
          .bindPopup(tour_data.location)
          .openPopup();
      })
      .catch((error) => console.error("Error fetching location:", error));
  }, []);
  return (
    <>
      <div style={{ height: "70px" }}></div>
      <section className="tour_img_container">
        <img src={tour_data.internal_ui.main_image} alt="" />
        <div className="header_text">
          {tour_data.external_ui.title}
          <div className="header_text_inner">
            {tour_data.internal_ui.introduction}
          </div>
        </div>
      </section>
      <section className="offers_container">
        {tour_data.internal_ui.offers.map((offer, id) => (
          <div key={id} className="offer">
            <div className="icon">
              {
                icon_filtering[
                  `${offer.title.replaceAll(" ", "").toLowerCase()}`
                ]
              }
            </div>
            <div className="content_conteainer">
              <div className="heading">{offer.title}</div>
              <div className="content">{offer.info}</div>
            </div>
          </div>
        ))}
      </section>
      <div className="main_tour_section_container">
        <section className="main_tour_section">
          <section className="tour_img_view">
            <img src={tour_data.external_ui.main_image} alt="main image" />
            <div className="inner_content">
              <div className="heading">{tour_data.external_ui.title}</div>
              <p className="content">
                {tour_data.external_ui.introduction
                  .split(" ")
                  .slice(0, 55)
                  .reduce((p, c) => `${p} ${c}`, "")}
                {tour_data.external_ui.introduction.split(" ").length > 55
                  ? "\t......"
                  : ""}
              </p>
              <div className="rating_section">
                <Hearts count={tour_data.external_ui.stars} />
                <div className="rating">{tour_data.external_ui.rating}</div>
              </div>
            </div>
          </section>
          <SchedulePhone
            classnames="phone"
            title={tour_data.external_ui.title}
            date={tour_data.date}
          />
          <div className="heading">Tour Details</div>
          <section className="tours_details">
            {tour_data.internal_ui.tour_details.map((tour_detials, id) => (
              <>
                <div key={id} className="tour_details">
                  <div className="icon">
                    {
                      icon_filtering[
                        `${tour_detials.title
                          .replaceAll(" ", "")
                          .toLowerCase()}`
                      ]
                    }
                  </div>
                  <div className="heading">{tour_detials.title}</div>
                  <div className="content">{tour_detials.info}</div>
                </div>
              </>
            ))}
          </section>
          <div className="heading">Full Description</div>
          <details className="fulldescription_container">
            <summary>
              {tour_data.internal_ui.description.full_description.title}
            </summary>
            <div class="content">
              {tour_data.internal_ui.description.full_description.content}
            </div>
          </details>
          <div className="heading">Things To Know</div>
          <section className="things_to_know">
            {tour_data.internal_ui.description.things_to_know.map(
              (info, id) => (
                <p className="thing_to_know" key={id}>
                  {info}
                </p>
              )
            )}
          </section>
          <div className="heading">Inclusions and Exclusions</div>
          <section className="inclusions_exclusions">
            <div>
              {tour_data.internal_ui.inclusions.map((inclusion_data, id) => (
                <div key={id} className="inclusion_container">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-colorSuccess MuiSvgIcon-fontSizeMedium css-nm8jzx"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="CheckIcon"
                  >
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                  </svg>
                  <div>{inclusion_data}</div>
                </div>
              ))}
            </div>

            <div className="exclusions_container_container">
              {tour_data.internal_ui.exclusions.map((exclusions_data, id) => (
                <div key={id} className="exclusions_container">
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-colorError MuiSvgIcon-fontSizeMedium css-dvceld"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="CloseIcon"
                  >
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                  <div>{exclusions_data}</div>
                </div>
              ))}
            </div>
          </section>
          <div className="heading">Meeting Point</div>
          <section className="meeting_point">
            <p className="content">{tour_data.internal_ui.meeting_point}</p>
          </section>
          <div id="map" className="meeting_point"></div>
        </section>
        <Schedule
          classnames="labtob"
          title={tour_data.external_ui.title}
          date={tour_data.date}
        />
      </div>

      <BookingWidget widget_src={tour_data.bookeo_link}></BookingWidget>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "2rem",
          marginTop: "1rem",
        }}
      >
        You May Also Like
      </div>
      <SliderContainer />
      <div className="extention_img_container">
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512.2 320.2"
          width="60"
          height="40"
          fill="#00af87"
        >
          <path
            class="st0"
            d="M128.2 127.9C92.7 127.9 64 156.6 64 192c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1.1-35.4-28.6-64.1-64-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S174 166.7 174 192s-20.5 45.9-45.8 45.9z"
          ></path>
          <circle class="st0" cx="128.4" cy="191.9" r="31.9"></circle>
          <path
            class="st0"
            d="M384.2 127.9c-35.4 0-64.1 28.7-64.1 64.1 0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1 0-35.4-28.7-64.1-64.1-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S430 166.7 430 192s-20.5 45.9-45.8 45.9z"
          ></path>
          <circle class="st0" cx="384.4" cy="191.9" r="31.9"></circle>
          <path
            class="st0"
            d="M474.4 101.2l37.7-37.4h-76.4C392.9 29 321.8 0 255.9 0c-66 0-136.5 29-179.3 63.8H0l37.7 37.4C14.4 124.4 0 156.5 0 192c0 70.8 57.4 128.2 128.2 128.2 32.5 0 62.2-12.1 84.8-32.1l43.4 31.9 42.9-31.2-.5-1.2c22.7 20.2 52.5 32.5 85.3 32.5 70.8 0 128.2-57.4 128.2-128.2-.1-35.4-14.6-67.5-37.9-90.7zM368 64.8c-60.7 7.6-108.3 57.6-111.9 119.5-3.7-62-51.4-112.1-112.3-119.5 30.6-22 69.6-32.8 112.1-32.8S337.4 42.8 368 64.8zM128.2 288.2C75 288.2 32 245.1 32 192s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2zm256 0c-53.1 0-96.2-43.1-96.2-96.2s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2z"
          ></path>
        </svg>
        <svg
          viewBox="0 -26.5 256 256"
          version="1.1"
          widths="60"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M58.7693166,91.1888424 C58.7693166,87.1185495 61.9112971,84.1193863 65.8387727,84.1193863 C69.7662483,84.1193863 72.9082287,87.1899582 72.9082287,91.1888424 C72.9082287,95.2591353 69.7662483,98.2582985 65.8387727,98.2582985 C61.9112971,98.2582985 58.7693166,95.1877266 58.7693166,91.1888424 Z M71.3372385,78.4781032 C71.3372385,82.5483961 74.479219,85.5475593 78.4066946,85.5475593 C82.3341702,85.5475593 85.4761506,82.4769874 85.4761506,78.4781032 C85.4761506,74.4078103 82.3341702,71.4086471 78.4066946,71.4086471 C74.479219,71.4086471 71.3372385,74.4078103 71.3372385,78.4781032 Z M88.5467225,69.8376569 L88.5467225,82.5483961 C98.4725244,82.5483961 106.256067,90.6175732 106.256067,101.186053 C106.256067,111.754533 98.4011158,119.82371 88.5467225,119.82371 C78.6209205,119.82371 70.837378,111.754533 70.837378,101.186053 L56.9841004,101.186053 C56.9841004,118.75258 70.9801953,132.534449 88.5467225,132.534449 C106.11325,132.534449 120.109344,118.75258 120.109344,101.186053 C120.109344,83.6195258 106.11325,69.8376569 88.5467225,69.8376569 Z M231.006974,189.018689 L231.006974,176.950628 L253.35788,176.950628 L253.35788,164.882566 L231.006974,164.882566 L231.006974,153.028731 L255.642957,153.028731 L255.642957,140.889261 L217.439331,140.889261 L217.439331,201.08675 L256,201.08675 L256,188.94728 L231.006974,188.94728 L231.006974,189.018689 Z M209.370153,171.02371 C209.370153,188.304603 196.159554,201.08675 177.521897,201.08675 L157.670293,201.08675 L157.670293,140.817852 L177.521897,140.817852 C196.159554,140.817852 209.370153,153.742817 209.370153,171.02371 Z M195.516876,171.02371 C195.516876,160.740865 188.661646,152.957322 178.593026,152.957322 L171.166527,152.957322 L171.166527,189.018689 L178.593026,189.018689 C188.661646,189.018689 195.516876,181.306555 195.516876,171.02371 Z M104.899303,177.950349 C104.899303,184.876987 99.972106,190.01841 93.1882845,190.01841 C86.404463,190.01841 81.4772664,184.876987 81.4772664,177.950349 L81.4772664,140.960669 L68.0524407,140.960669 L68.0524407,177.736123 C68.0524407,191.946444 78.6923291,202.372106 93.1882845,202.372106 C107.68424,202.372106 118.324128,191.875035 118.324128,177.736123 L118.324128,140.960669 L104.899303,140.960669 L104.899303,177.950349 L104.899303,177.950349 Z M26.7782427,179.164296 L40.1316597,179.164296 C38.9177127,185.376848 33.4192469,190.161227 26.8496513,190.161227 C19.4945607,190.161227 13.567643,184.23431 13.567643,175.593863 L13.567643,166.667782 C13.567643,158.170153 19.9230126,151.886192 28.8490934,151.886192 C35.7757322,151.886192 41.9882845,155.670851 43.9877266,161.169317 L56.4842399,156.813389 C53.0566248,146.244909 41.7740586,139.675314 28.8490934,139.675314 C12.4965132,139.675314 0.357043236,150.672245 0.357043236,166.667782 L0.357043236,175.593863 C0.428451883,190.946722 11.7824268,202.372106 25.7785216,202.372106 C34.4903766,202.372106 42.2025105,197.94477 46.7012552,191.08954 L46.7012552,201.158159 L58.5550907,201.158159 L58.5550907,167.667503 L26.7782427,167.667503 L26.7782427,179.164296 Z M178.664435,107.827057 L178.664435,71.0516039 L165.239609,71.0516039 L165.239609,108.041283 C165.239609,114.967922 160.312413,120.109344 153.528591,120.109344 C146.74477,120.109344 141.817573,114.967922 141.817573,108.041283 L141.817573,71.0516039 L128.392748,71.0516039 L128.392748,107.827057 C128.392748,122.037378 139.032636,132.46304 153.528591,132.46304 C168.024547,132.46304 178.664435,122.037378 178.664435,107.827057 Z M22.7079498,131.249093 L36.2041841,131.249093 L36.2041841,108.398326 L58.8407252,71.0516039 L43.5592748,71.0516039 L29.2775453,95.6875872 L15.2100418,71.0516039 L0,71.0516039 L22.6365411,108.541144 L22.6365411,131.249093 L22.7079498,131.249093 Z M158.312971,1.14253835 L112.611437,1.14253835 L112.611437,13.2820084 L158.312971,13.2820084 L158.312971,1.14253835 Z M106.827336,49.2005579 L81.762901,49.2005579 L81.762901,37.1324965 L104.113808,37.1324965 L104.113808,25.0644351 L81.762901,25.0644351 L81.762901,13.2105997 L106.398884,13.2105997 L106.398884,1.07112971 L68.195258,1.07112971 L68.195258,61.2686192 L106.755927,61.2686192 L106.755927,49.2005579 L106.827336,49.2005579 Z M25.7785216,62.6253835 C34.4903766,62.6253835 42.2025105,58.1980474 46.7012552,51.3428173 L46.7012552,61.4114365 L58.5550907,61.4114365 L58.5550907,27.920781 L26.7782427,27.920781 L26.7782427,39.4889819 L40.1316597,39.4889819 C38.9177127,45.7015342 33.4192469,50.4859135 26.8496513,50.4859135 C19.4945607,50.4859135 13.567643,44.5589958 13.567643,35.9185495 L13.567643,26.9924686 C13.567643,18.4948396 19.9230126,12.2108787 28.8490934,12.2108787 C35.7757322,12.2108787 41.9882845,15.995537 43.9877266,21.4940028 L56.4842399,17.1380753 C53.0566248,6.56959554 41.7740586,0 28.8490934,0 C12.4965132,0 0.357043236,10.9969317 0.357043236,26.9924686 L0.357043236,35.9185495 C0.428451883,51.2 11.7824268,62.6253835 25.7785216,62.6253835 Z M209.441562,116.039052 L202.443515,108.683961 L209.370153,101.186053 L202.372106,93.8309623 L209.298745,86.3330544 L202.300697,78.9779637 L210.012831,71.0516039 L196.016736,71.0516039 L188.44742,79.0493724 L195.445467,86.404463 L188.518828,93.902371 L195.516876,101.257462 L188.590237,108.75537 L195.588285,116.11046 L188.661646,123.608368 L196.088145,131.320502 L210.155649,131.320502 L202.586332,123.53696 L209.441562,116.039052 Z M143.817015,169.238494 C145.816457,167.453278 149.172664,164.454114 149.172664,158.88424 C149.172664,153.385774 145.816457,150.315202 143.817015,148.529986 C143.745607,148.458577 143.674198,148.387169 143.602789,148.31576 C142.603068,147.24463 142.460251,145.745049 142.388842,145.030962 L142.388842,140.817852 L128.821199,140.817852 L128.821199,146.459135 L128.821199,146.459135 C128.821199,146.530544 128.821199,146.601953 128.821199,146.673361 C128.821199,152.171827 132.177406,155.242399 134.176848,157.027615 C135.605021,158.312971 135.605021,158.384379 135.605021,158.88424 C135.605021,159.3841 135.605021,159.455509 134.176848,160.740865 C132.248815,162.454672 129.106834,165.311018 128.892608,170.452441 L128.892608,170.452441 C128.892608,170.523849 128.892608,170.666667 128.892608,170.738075 C128.892608,170.809484 128.892608,170.809484 128.892608,170.880893 C128.892608,170.952301 128.892608,170.952301 128.892608,171.02371 C128.892608,171.095119 128.892608,171.237936 128.892608,171.309344 L128.892608,171.309344 C129.106834,176.450767 132.320223,179.307113 134.176848,181.020921 C135.605021,182.306276 135.605021,182.377685 135.605021,182.877545 C135.605021,183.377406 135.605021,183.448815 134.176848,184.73417 C132.177406,186.519386 128.821199,189.51855 128.821199,195.088424 C128.821199,195.159833 128.821199,195.231241 128.821199,195.30265 L128.821199,195.30265 L128.821199,200.943933 L142.388842,200.943933 L142.388842,196.730823 C142.388842,196.016736 142.603068,194.517155 143.602789,193.446025 C143.674198,193.374616 143.745607,193.303208 143.817015,193.231799 C145.816457,191.446583 149.172664,188.44742 149.172664,182.877545 C149.172664,177.379079 145.816457,174.308508 143.817015,172.523291 C142.53166,171.380753 142.388842,171.166527 142.388842,170.809484 C142.460251,170.595258 142.603068,170.381032 143.817015,169.238494 Z M128.678382,61.3400279 L142.174616,61.3400279 L142.174616,50.1288703 L128.678382,50.1288703 L128.678382,61.3400279 Z M142.246025,34.1333333 L128.749791,34.1333333 L128.749791,45.3444909 L142.246025,45.3444909 L142.246025,34.1333333 Z M142.246025,18.0663877 L128.749791,18.0663877 L128.749791,29.2775453 L142.246025,29.2775453 L142.246025,18.0663877 Z M244.574616,131.249093 L228.150628,108.255509 C236.148396,105.756206 241.718271,98.758159 241.718271,90.1891213 C241.718271,79.335007 232.720781,71.0516039 221.366806,71.0516039 L213.440446,71.0516039 L213.440446,83.2624826 L220.866946,83.2624826 C224.794421,83.2624826 227.864993,86.404463 227.864993,90.5461646 C227.864993,94.6878661 224.794421,97.8298466 220.866946,97.8298466 L213.440446,97.8298466 L213.440446,109.398047 L228.150628,131.320502 L244.574616,131.320502 L244.574616,131.249093 Z"
              fill="#FF5533"
            ></path>
          </g>
        </svg>
        <img src="/img3.webp" alt="img3" />
      </div>
    </>
  );
};

export default TourPage;
