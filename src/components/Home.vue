<template>
   <Page class="page">
        <ActionBar class="action-bar" title="Vue Mapbox Example"></ActionBar>
        <GridLayout>
                <Mapbox
                    accessToken="pk.eyJ1IjoidHVsc2lyIiwiYSI6ImNqazBocTFpbDAxMzQzdHQ0aWUzNTdpam4ifQ.CoNT41zH04gseYdMKlLkeQ"
                    mapStyle="traffic_day"
                    latitude="37.7397"
                    longitude="-121.4252"
                    hideCompass="true"
                    zoomLevel="12"
                    showUserLocation="false"
                    disableZoom="false"
                    disableRotation="false"
                    disableScroll="false"
                    disableTilt="false"
                    @mapReady="onMapReady($event)">
                </Mapbox>
        </GridLayout>
    </Page>
</template>
<script>
    import * as utils from "utils/utils";
    export default {
        data () {
            return { };
        },
        methods: {
            onMapReady(args) {
                args.map.addMarkers([
                    {
                        lat: 37.7397,
                        lng: -121.4252,
                        title: "Tracy, CA",
                        subtitle: "Home of The Polyglot Developer!",
                        onCalloutTap: () => {
                            utils.openUrl("https://www.thepolyglotdeveloper.com");
                        }
                    }
                ]);
            }
        }
    };
</script>