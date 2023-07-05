import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { of, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'gymsearch',
  templateUrl: './gymsearch.component.html',
  styleUrls: ['./gymsearch.component.scss'],
})
export class GymsearchComponent implements OnInit {

  constructor(private modalController: ModalController, private geolocation: Geolocation, private httpClient: HttpClient) {
    this.data.filter(item => item.name.includes(''));
  }

  searchTerm: string | undefined;
  filteredData$: Observable<any[]> = of([]);
  // unfilteredData$: any[] = [];
  private searchTerm$ = new Subject<string>();
  maxDistance: number = 15;//default in kilometers
  currLatitude: Number;
  currLongitude: Number;
  MAPS_API_KEY = environment.mapsApiKey;
  gymsSubscription: Subscription;
  gyms = {
     "html_attributions" : [],
     "next_page_token" : "Aaw_FcKS6gtFrXfZ__LTL0vHjOy1Ttd8V3viWJc06eGqjqq8ThbT39ueK2yFakQABdjREX7h32QGWykuAw9Gc7JyA9dNfZuSbFX83hkLj3B_Y3myyz7gOvWFTDEcSO6Qoh0J4PJ0Pxfs6PwbXrZloJaSqVmiqvIoR8Hzab3tcKwyT9VwIfWtDMZ4pJ5bw3o3Eh-rggJJuBQ4ICWv4pLZXCi75ZQ9OXY5SUN7yU4pcHxl6WAWkPR8Cz0jWFpKaudhyTD9679EFygnBH57zuKA1gxAf81LCsNwu7hPqeGTCCQoDl9Qmxd7ol9H3sFYInpUzSL8_vEtVisyzStmF7BQqhW9StrS2E6DHdtv6Z9ENq-DXGvDNRa3B8dE5tr063l6kjA6oDAzP5qy6_h0Xi8FkLx0kQpeD8ZknXg6I8qeF5Ab9tPduRJk5ek",
     "results" : [
        {
           "business_status" : "CLOSED_TEMPORARILY",
           "geometry" : {
              "location" : {
                 "lat" : -25.7641424,
                 "lng" : 28.2745502
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7627893197085,
                    "lng" : 28.2758545802915
                 },
                 "southwest" : {
                    "lat" : -25.7654872802915,
                    "lng" : 28.2731566197085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
           "name" : "the yoga tree.",
           "permanently_closed" : true,
           "place_id" : "ChIJUww6lfRglR4RPz44wt9Osvg",
           "plus_code" : {
              "compound_code" : "67PF+8R Pretoria, South Africa",
              "global_code" : "5G6C67PF+8R"
           },
           "rating" : 3,
           "reference" : "ChIJUww6lfRglR4RPz44wt9Osvg",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 1,
           "vicinity" : "496 Dawn Road, Lynnwood, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7548168,
                 "lng" : 28.2496208
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7535793697085,
                    "lng" : 28.2511423802915
                 },
                 "southwest" : {
                    "lat" : -25.7562773302915,
                    "lng" : 28.24844441970849
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "TSG (Tuks Student Gym).",
           "opening_hours" : {
              "open_now" : false
           },
           "photos" : [
              {
                 "height" : 3468,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/111017786922083211867\"\u003ePedro Miguel\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcJsQ5h8cqkkQOk1xY_xslOcWVKYDz7u6jmIdIjCqKzN60V4_VjBuyeZ-lBtffsuW0e-BwmGOV45_BuVsi24gk1JZ4uGOgjRU8c2yFJyEjom2tmPheHfss8dyPknMxBGnxVQ0pXbfOYgNgrY6Ox5AIhEF6ZTcwM_KsdgPdIDDrUjj643",
                 "width" : 4624
              }
           ],
           "place_id" : "ChIJn507gq1hlR4R_K7zA5V3mWw",
           "plus_code" : {
              "compound_code" : "66WX+3R Pretoria, South Africa",
              "global_code" : "5G6C66WX+3R"
           },
           "rating" : 4,
           "reference" : "ChIJn507gq1hlR4R_K7zA5V3mWw",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 163,
           "vicinity" : "Farmers Folly Road, Koedoespoort 456-Jr, Pretoria"
        },
        {
           "business_status" : "CLOSED_TEMPORARILY",
           "geometry" : {
              "location" : {
                 "lat" : -25.7600514,
                 "lng" : 28.258949
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7586842697085,
                    "lng" : 28.2604674802915
                 },
                 "southwest" : {
                    "lat" : -25.7613822302915,
                    "lng" : 28.2577695197085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
           "name" : "Kinetic Precision",
           "permanently_closed" : true,
           "place_id" : "ChIJU-HHNPRglR4RcZYCzYlJY_E",
           "plus_code" : {
              "compound_code" : "67Q5+XH Pretoria, South Africa",
              "global_code" : "5G6C67Q5+XH"
           },
           "reference" : "ChIJU-HHNPRglR4RcZYCzYlJY_E",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "vicinity" : "356 Rosemary Road, Lynnwood, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7734746,
                 "lng" : 28.2538441
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7720803197085,
                    "lng" : 28.2551589802915
                 },
                 "southwest" : {
                    "lat" : -25.7747782802915,
                    "lng" : 28.2524610197085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
           "name" : "Body Intellect Pilates Studio - Menlo Park - Pretoria",
           "opening_hours" : {
              "open_now" : false
           },
           "place_id" : "ChIJgx4Ha_1glR4Rg3kuObYuaBI",
           "plus_code" : {
              "compound_code" : "67G3+JG Pretoria, South Africa",
              "global_code" : "5G6C67G3+JG"
           },
           "rating" : 4.9,
           "reference" : "ChIJgx4Ha_1glR4Rg3kuObYuaBI",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 11,
           "vicinity" : "3 14th Street, Menlo Park, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7694108,
                 "lng" : 28.2617899
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7681201697085,
                    "lng" : 28.2630821302915
                 },
                 "southwest" : {
                    "lat" : -25.7708181302915,
                    "lng" : 28.2603841697085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "CrossFit Greenlyn",
           "opening_hours" : {
              "open_now" : true
           },
           "photos" : [
              {
                 "height" : 3120,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/111849536310769016017\"\u003eAndreas Nadiotis\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcJkLGNgJq42ZBITgdOBHhDNXkb8etZyU6PHmL82J4v2CYzyyEwM5XweW4mzRifQhKrLo3KIDzfW9OY1Fsw8fkbVGbRfydTsOGtP1Ynyxz0WyF40-KYPvpk2d6IMFYBxQGfLj4Qc9O2AZhJVwJ4hTqdur-xM_R-vMwi0g5Tiz09NkV5g",
                 "width" : 4160
              }
           ],
           "place_id" : "ChIJ4-tknf5glR4RGm5xRwH54ds",
           "plus_code" : {
              "compound_code" : "67J6+6P Pretoria, South Africa",
              "global_code" : "5G6C67J6+6P"
           },
           "rating" : 4.8,
           "reference" : "ChIJ4-tknf5glR4RGm5xRwH54ds",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "store", "point_of_interest", "establishment" ],
           "user_ratings_total" : 29,
           "vicinity" : "442 Atterbury Road, Menlo Park, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.76746159999999,
                 "lng" : 28.2537007
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7660143697085,
                    "lng" : 28.2552296802915
                 },
                 "southwest" : {
                    "lat" : -25.7687123302915,
                    "lng" : 28.2525317197085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "Pretoria Marathon Club",
           "photos" : [
              {
                 "height" : 3968,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/109303192259413738151\"\u003eMakube Lucritia\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcK46dinxkrwSbZ5sTS0JvfcxPlMoNyyZYdsuHTdFTOOzOrx0Qa4-CoYIafWG5Sg7tlQgCOk2bLDWZkVokhFwnHaJG1uhetisCAyS6pOltVWCzE9f2JIt0hDgHOYtWrUzc3zs1BYxVGSa-qe3lOTyNvDh9sRh4BogVHbICK_KXgwVYOu",
                 "width" : 2976
              }
           ],
           "place_id" : "ChIJ0QtZMf5glR4RzHojAVBcjBw",
           "plus_code" : {
              "compound_code" : "67M3+2F Pretoria, South Africa",
              "global_code" : "5G6C67M3+2F"
           },
           "rating" : 4.5,
           "reference" : "ChIJ0QtZMf5glR4RzHojAVBcjBw",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 13,
           "vicinity" : "Cnr &, Thomas Edison St, 8th Street, &, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7699927,
                 "lng" : 28.2497309
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7687799197085,
                    "lng" : 28.2510388802915
                 },
                 "southwest" : {
                    "lat" : -25.7714778802915,
                    "lng" : 28.2483409197085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
           "name" : "MOVING ON-CORE Pilates",
           "opening_hours" : {
              "open_now" : true
           },
           "photos" : [
              {
                 "height" : 2048,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/102097411418073563451\"\u003eMOVING ON-CORE Pilates\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcIfMZX6U3slhir6DgJjf8t5rvsE4K1fsOy_YDy7P0znFIFaa7xwvJbElEjAPTje4Ep6CrM64tjX7v2OMeLCXQD_FF6C1CYonJwp4f_VAKtZM8tlI0bM9ZL32Gx72WCs6Goy4zwWCf69m0qyujGvugP1vWbTHHhJRUYolE7MnnNiLNlV",
                 "width" : 2048
              }
           ],
           "place_id" : "ChIJF7oBeAFhlR4RcP7sFSzacP8",
           "plus_code" : {
              "compound_code" : "66JX+2V Pretoria, South Africa",
              "global_code" : "5G6C66JX+2V"
           },
           "rating" : 5,
           "reference" : "ChIJF7oBeAFhlR4RcP7sFSzacP8",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 1,
           "vicinity" : "1150 Justice Mahomed Street (Formerly, 440 Justice Mahomed Street, Brooklyn, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7605146,
                 "lng" : 28.2446795
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.75910391970849,
                    "lng" : 28.2461170802915
                 },
                 "southwest" : {
                    "lat" : -25.7618018802915,
                    "lng" : 28.24341911970849
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "Johns Hobkins Health & Educational SA",
           "opening_hours" : {
              "open_now" : false
           },
           "place_id" : "ChIJH-wfzK5hlR4RKvVx2TK_MC0",
           "plus_code" : {
              "compound_code" : "66QV+QV Pretoria, South Africa",
              "global_code" : "5G6C66QV+QV"
           },
           "rating" : 4,
           "reference" : "ChIJH-wfzK5hlR4RKvVx2TK_MC0",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 4,
           "vicinity" : "BlockD Equity Hse, 257 Brooklyn St, New Muckleneuk, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.765275,
                 "lng" : 28.2423847
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.76397531970849,
                    "lng" : 28.2437183302915
                 },
                 "southwest" : {
                    "lat" : -25.7666732802915,
                    "lng" : 28.2410203697085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "Run/Walk for Life Brooklyn",
           "opening_hours" : {
              "open_now" : false
           },
           "place_id" : "ChIJoxyGaqhhlR4ROS9cwwSu7kk",
           "plus_code" : {
              "compound_code" : "66MR+VX Pretoria, South Africa",
              "global_code" : "5G6C66MR+VX"
           },
           "rating" : 5,
           "reference" : "ChIJoxyGaqhhlR4ROS9cwwSu7kk",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 2,
           "vicinity" : "257 Mackenzie Street, Brooklyn, Pretoria"
        },
        {
           "business_status" : "CLOSED_TEMPORARILY",
           "geometry" : {
              "location" : {
                 "lat" : -25.7634697,
                 "lng" : 28.27943029999999
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.76202211970849,
                    "lng" : 28.2807387302915
                 },
                 "southwest" : {
                    "lat" : -25.7647200802915,
                    "lng" : 28.2780407697085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "FitTelo",
           "permanently_closed" : true,
           "place_id" : "ChIJAQDAm4tglR4RmUKOddt87OU",
           "plus_code" : {
              "compound_code" : "67PH+JQ Pretoria, South Africa",
              "global_code" : "5G6C67PH+JQ"
           },
           "reference" : "ChIJAQDAm4tglR4RmUKOddt87OU",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "vicinity" : "alkantrant library"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7772487,
                 "lng" : 28.2567881
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.77593161970849,
                    "lng" : 28.2582621802915
                 },
                 "southwest" : {
                    "lat" : -25.7786295802915,
                    "lng" : 28.2555642197085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "Planet Fitness Signature - Hazelwood",
           "opening_hours" : {
              "open_now" : true
           },
           "photos" : [
              {
                 "height" : 3024,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/103333101804312603261\"\u003eMarcel Meyer\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcLmhqekpvgz_-z_U0EmIql754apoOtnQy1ZGjIRtXzvTzbODj76XaB5fQ78Vcb5jTtSChBWEJVUv9p335dcZaHY3CSY25QL2MtApI89bMkSy1W4pahlabZ2WWEzTIfdOyw_0gU-oMmhhMlkBDh4mwVkaLgny-nYjoxFP93gUXwrH3Do",
                 "width" : 4032
              }
           ],
           "place_id" : "ChIJITvTvONglR4R16gXRwFkCJs",
           "plus_code" : {
              "compound_code" : "67F4+4P Pretoria, South Africa",
              "global_code" : "5G6C67F4+4P"
           },
           "rating" : 4.5,
           "reference" : "ChIJITvTvONglR4R16gXRwFkCJs",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 425,
           "vicinity" : "Cnr Pinaster & 18th Rd Club 2, Erf 151, Hazelwood, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7787872,
                 "lng" : 28.2620616
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7775505197085,
                    "lng" : 28.2634377802915
                 },
                 "southwest" : {
                    "lat" : -25.7802484802915,
                    "lng" : 28.26073981970849
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "FitFirst Training",
           "photos" : [
              {
                 "height" : 2028,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/105846485027190458321\"\u003eFitFirst Training\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcJNKQSyBAnAu1vwIX6O9u-C8bCUqzgcgIgDBgMMekR3X5-BLdlvdJYYtmQxYVuBl-Ng0Ga12pV2L7kVkttyK8lMrrXJMhNi4_RVLFOqAf-taXWqEbaxU8lPeGg8BvicdwObIIQUWrm1f12pJLXMDzcOTVAD6-QiVJVZMFjaYksBQFdi",
                 "width" : 3605
              }
           ],
           "place_id" : "ChIJ7SjmuONglR4RuC-9Qomj67Y",
           "plus_code" : {
              "compound_code" : "67C6+FR Pretoria, South Africa",
              "global_code" : "5G6C67C6+FR"
           },
           "rating" : 4.9,
           "reference" : "ChIJ7SjmuONglR4RuC-9Qomj67Y",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 80,
           "vicinity" : "68 Pinaster Avenue, Hazelwood, Pretoria"
        },
        {
           "business_status" : "CLOSED_TEMPORARILY",
           "geometry" : {
              "location" : {
                 "lat" : -25.7527492,
                 "lng" : 28.2401096
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7513945697085,
                    "lng" : 28.2415272802915
                 },
                 "southwest" : {
                    "lat" : -25.7540925302915,
                    "lng" : 28.2388293197085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "Crossfit Gotyoursix.",
           "permanently_closed" : true,
           "place_id" : "ChIJjW_EbbphlR4RTnKw13NnjMU",
           "plus_code" : {
              "compound_code" : "66WR+W2 Pretoria, South Africa",
              "global_code" : "5G6C66WR+W2"
           },
           "rating" : 5,
           "reference" : "ChIJjW_EbbphlR4RTnKw13NnjMU",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 4,
           "vicinity" : "527 Jan Shoba Street, Hatfield, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.78034090000001,
                 "lng" : 28.2650447
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7790926697085,
                    "lng" : 28.2663536302915
                 },
                 "southwest" : {
                    "lat" : -25.7817906302915,
                    "lng" : 28.2636556697085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
           "name" : "Studio Kinetic",
           "opening_hours" : {
              "open_now" : false
           },
           "photos" : [
              {
                 "height" : 608,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/112989687025150853999\"\u003eStudio Kinetic\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcJm5DLZGpvGjEnNRSiebKkHvWBNx-tcftqBoLoon_YjrwQHdUy14k7aWyrrfVGol1qGLR328X6V14B6vC4UAy0C3Ci5hrZJ9RAeJDwO_0UgvzImBYdw6UNLTcI3eCkkOBTQpmcPE-TQJpxit18LifcDUslW9LNXLJPtArHSp_xD-oR4",
                 "width" : 1081
              }
           ],
           "place_id" : "ChIJDRPHjeRglR4RLaSInjusFcE",
           "plus_code" : {
              "compound_code" : "6798+V2 Pretoria, South Africa",
              "global_code" : "5G6C6798+V2"
           },
           "rating" : 4.8,
           "reference" : "ChIJDRPHjeRglR4RLaSInjusFcE",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 6,
           "vicinity" : "154 Koelman Road, Alphen Park, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7483811,
                 "lng" : 28.2820813
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7469638197085,
                    "lng" : 28.2834498302915
                 },
                 "southwest" : {
                    "lat" : -25.7496617802915,
                    "lng" : 28.2807518697085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "Body Kinetics - Fitness & Rehabilitation Centre (CSIR Campus Pretoria)",
           "opening_hours" : {
              "open_now" : true
           },
           "photos" : [
              {
                 "height" : 3652,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/117813588027553506033\"\u003eBody Kinetics\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcLc64twOVb0blnJzJiYNJXgj8yU04cu0iGvuGl756aJK85kPVPh2-geb989oc2XYfHAdG0uOr9RvxMTBDkBlqDvjZEGrVfmnIuFJpq_t60o5KM11cwXkDoIGE4tYxYdt4sLH2hQqrbZaIzaStqTmKW5Up4fytAdCEjsHEb70_t5-Jq-",
                 "width" : 5478
              }
           ],
           "place_id" : "ChIJRwpxO2hglR4R32H9ICYBDzE",
           "plus_code" : {
              "compound_code" : "772J+JR Pretoria, South Africa",
              "global_code" : "5G6C772J+JR"
           },
           "rating" : 4.5,
           "reference" : "ChIJRwpxO2hglR4R32H9ICYBDzE",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 93,
           "vicinity" : "Building 24, CSIR, 1 Meiring Naud\u00e9 Road, Brummeria, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7754793,
                 "lng" : 28.2404352
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.77405496970849,
                    "lng" : 28.24177333029151
                 },
                 "southwest" : {
                    "lat" : -25.7767529302915,
                    "lng" : 28.2390753697085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "Brooks&Brooks GarageGym In The Park",
           "opening_hours" : {
              "open_now" : false
           },
           "photos" : [
              {
                 "height" : 3024,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/105368110802056968357\"\u003eGericke Zondagh\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcKnC71YAPImI1E3Yg93ewQqirVNMFpksGEKEQ8tIogWvI2QvLTVlRxlLtq3Igfpz0iH9sdXHaSggi70OCzcaFCg1Bvw5fc_bX3eMaNtxwROx8D2Tw3QXx65KCVRkFoj6erBc7v7E6gxdXY_Al6XzusYtAH222OEG5VcOFx0edc9KftS",
                 "width" : 4032
              }
           ],
           "place_id" : "ChIJvd6Fxg9hlR4RgE6qn-_IiEc",
           "plus_code" : {
              "compound_code" : "66FR+R5 Pretoria, South Africa",
              "global_code" : "5G6C66FR+R5"
           },
           "rating" : 5,
           "reference" : "ChIJvd6Fxg9hlR4RgE6qn-_IiEc",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 11,
           "vicinity" : "Main Street, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7657601,
                 "lng" : 28.2787899
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7640489197085,
                    "lng" : 28.2798282802915
                 },
                 "southwest" : {
                    "lat" : -25.7667468802915,
                    "lng" : 28.27713031970849
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "Planet Fitness - Lynnwood",
           "opening_hours" : {
              "open_now" : true
           },
           "photos" : [
              {
                 "height" : 2160,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/102099402757374331904\"\u003eMichael Zheng\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcJ1cBnjootSdU-VWBmj00uZCDmqkI3uQR0Vn3syJW4lVr_VAs-DMTCqsjWkJQUn2abWP5chPr9mdXQmPLpOBJ4D8npEOs_7eDDVsv1GRnXoFqDioAI_1x4vyWu7EAriIiUXixbq6HF8FZUuPRe0usZ5DcT6kyMiwOzIDL1UtgyKa0Yf",
                 "width" : 3840
              }
           ],
           "place_id" : "ChIJI4BHWYxglR4R5HLaeG6MaXo",
           "plus_code" : {
              "compound_code" : "67MH+MG Pretoria, South Africa",
              "global_code" : "5G6C67MH+MG"
           },
           "rating" : 4.1,
           "reference" : "ChIJI4BHWYxglR4R5HLaeG6MaXo",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 470,
           "vicinity" : "Cnr Lynnwood & Daventry Rd, Lynnwood Road, Lynnwood Manor, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7612139,
                 "lng" : 28.2421834
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7596461697085,
                    "lng" : 28.2435863302915
                 },
                 "southwest" : {
                    "lat" : -25.7623441302915,
                    "lng" : 28.2408883697085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
           "name" : "Yoga Connection",
           "opening_hours" : {
              "open_now" : false
           },
           "photos" : [
              {
                 "height" : 676,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/102823727367977730587\"\u003eYoga Connection\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcLZyP-FkG0PJXp0pOkl1aJRCrCuaS3GwxX2jRmQN-2USwHDVSK2LU2VjX4PDdBXt6DBphO8qH4eCEvkGuTU6zVpUVIC90VmlMKyiLCTPSBjRZYtA741YF2Y-DOTwznzzEwxSiEmFfNk_cY6vBc8Nm0OaI9xR8uTv4QE07FZCGQ6dMW7",
                 "width" : 1200
              }
           ],
           "place_id" : "ChIJV3kLS69hlR4RMQ9ChUCzRLk",
           "plus_code" : {
              "compound_code" : "66QR+GV Pretoria, South Africa",
              "global_code" : "5G6C66QR+GV"
           },
           "rating" : 4.9,
           "reference" : "ChIJV3kLS69hlR4RMQ9ChUCzRLk",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 13,
           "vicinity" : "243 Brooks Street, Brooklyn, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7613422,
                 "lng" : 28.2646965
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7599276197085,
                    "lng" : 28.2660479302915
                 },
                 "southwest" : {
                    "lat" : -25.7626255802915,
                    "lng" : 28.2633499697085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "Trim Park",
           "opening_hours" : {
              "open_now" : true
           },
           "place_id" : "ChIJ1XmDBMZhlR4R6LGASt2EwJg",
           "plus_code" : {
              "compound_code" : "67Q7+FV Pretoria, South Africa",
              "global_code" : "5G6C67Q7+FV"
           },
           "reference" : "ChIJ1XmDBMZhlR4R6LGASt2EwJg",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "vicinity" : "Lynnwood, Pretoria"
        },
        {
           "business_status" : "OPERATIONAL",
           "geometry" : {
              "location" : {
                 "lat" : -25.7613324,
                 "lng" : 28.2647179
              },
              "viewport" : {
                 "northeast" : {
                    "lat" : -25.7599230697085,
                    "lng" : 28.2660696302915
                 },
                 "southwest" : {
                    "lat" : -25.7626210302915,
                    "lng" : 28.2633716697085
                 }
              }
           },
           "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
           "icon_background_color" : "#7B9EB0",
           "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
           "name" : "Samaritan's Gym",
           "opening_hours" : {
              "open_now" : true
           },
           "photos" : [
              {
                 "height" : 4000,
                 "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/106502602926944897599\"\u003eCharlie Scalliet\u003c/a\u003e"
                 ],
                 "photo_reference" : "Aaw_FcJQUNFD-sgKAD1nN8PZbtfbC6e2e5BNwF_DRcjS7VY9Fr_bmFSlHgg_ohFUwZWHfkzelFEXeqcXXIZ8900uecX-FO-eQACKgeA4ph17akOGi6jK-Vd05epyTJu17_qj1WNgnRgmUeJU0K18pzk9x-3kSwqFCAVQzbWf2AKOM6YgOIYH",
                 "width" : 3000
              }
           ],
           "place_id" : "ChIJnTKxy6dhlR4RDHG8oxrgVQI",
           "plus_code" : {
              "compound_code" : "67Q7+FV Pretoria, South Africa",
              "global_code" : "5G6C67Q7+FV"
           },
           "rating" : 4.4,
           "reference" : "ChIJnTKxy6dhlR4RDHG8oxrgVQI",
           "scope" : "GOOGLE",
           "types" : [ "gym", "health", "point_of_interest", "establishment" ],
           "user_ratings_total" : 26,
           "vicinity" : "Lynnwood, Pretoria"
        }
     ],
     "status" : "OK"
  }
  
  //will get this from the service

  data: any[] = [
    {
      name: 'Virgin Active',
      description: 'A small Description of the Location',
      image: 'https://loremflickr.com/320/240/gym',
      location: 'Hatfield',
    },
    {
      name: 'Gym & Fitness Center',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://loremflickr.com/320/240/pushups',
      location: 'Pretoria',
    },
    {
      name: 'Fitness First',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      image: 'https://loremflickr.com/320/240/dumbbell',
      location: 'Johannesburg',
    },
    {
      name: 'XYZ Gym',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      image: 'https://loremflickr.com/320/240/benchpress',
      location: 'Cape Town',
    },
    {
      name: 'Active Life Fitness',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      image: 'https://loremflickr.com/320/240/running',
      location: 'Durban',
    },
  ];

  unfilteredData$ = this.data;

  ngOnInit() {

    // this.loadData();
    this.triggerfilter();
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition();
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //   }
    // }
    // try {
    //   const userLocation = await this.getCurrentLocation();
    //   console.log('User Location:', userLocation);
    //   Use the userLocation object as needed
    // } catch (error) {
    //   console.log('Error getting current location:', error);
    //   Handle error
    // }
    this.getCurrentLocation().then((coordinates: GeolocationCoordinates) => {
      this.currLatitude = coordinates.latitude;
      this.currLongitude = coordinates.longitude;
      console.log('Latitude:', this.currLatitude);
      console.log('Longitude:', this.currLongitude);
      console.log('maxDistance:', this.maxDistance);
      this.gymsSubscription = this.searchNearbyGyms().subscribe((gyms) => {
        console.log('Nearby gyms:', gyms);
      }, (error) => {
        console.error('Error searching for nearby gyms:', error);
      });
    }).catch((error) => {
      console.log('Error getting current location:', error);
    });
  }

  loadData() {
    this.onSearchInput('');
  }

  triggerfilter() {
    this.filteredData$ = this.searchTerm$.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      map(searchTerm => this.filterData(searchTerm))
    );
  }

  filterData(searchTerm: string): any[] {
    if (!searchTerm || searchTerm === '' || searchTerm === null) {
      return this.data;
    }
    return this.data.filter(item => item.name.includes(searchTerm));
  }


  onSearchInput(event: any) {
    const searchTerm = event.target.value;
    // this.searchTerm = searchTerm;
    this.searchTerm$.next(searchTerm);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  selectGym(name: string) {
    this.modalController.dismiss({ selectedGym: name });
  }

  getCurrentLocation(): Promise<GeolocationCoordinates> {
    return this.geolocation.getCurrentPosition().then((position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      // this.searchNearbyGyms().then((gyms) => {
      //   console.log('Nearby gyms:', gyms);
      // }).catch((error) => {
      //   console.error('Error searching for nearby gyms:', error);
      // });
      const geolocationCoordinates: GeolocationCoordinates = {
        latitude: latitude,
        longitude: longitude,
        accuracy: position.coords.accuracy,
        altitude: position.coords.altitude,
        altitudeAccuracy: position.coords.altitudeAccuracy,
        heading: position.coords.heading,
        speed: position.coords.speed
      };
      return geolocationCoordinates;
    });
  }
  
  searchNearbyGyms() {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.currLatitude},${this.currLongitude}&radius=${this.maxDistance*1000}&type=gym&key=${this.MAPS_API_KEY}`;
    const headers = new HttpHeaders()
    .set('X-Requested-With', 'XMLHttpRequest')
    // or: .set('X-Requested-With', 'XMLHttpRequest');

  return this.httpClient.get(`https://anycors.com/${apiUrl}`, { headers });
  }
  
}
