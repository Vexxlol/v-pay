<template>

    <div class="content">
        <div class="header">
            <MenuBar />
            <div id="home" class="main">
                <center>
                    <h1 style="font-size: 40px">
                        Online payments...
                    </h1>
                </center>
                <br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem consectetur, aliquam quidem 
                    illo modi quaerat a consequatur labore dolore sunt voluptatem natus neque pariatur voluptas laudantium rerum, quisquam voluptate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi autem consectetur, aliquam quidem 
                    illo modi quaerat a consequatur labore dolore sunt voluptatem natus neque pariatur voluptas laudantium rerum, quisquam voluptate. </p>
            </div>
        </div>
        <!-- <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style="stroke: none; fill: #5865F2;"></path></svg></div> -->
        <div style="height: 150px; overflow:hidden;">
            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 600" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path fill="#5865F2" fill-opacity="1" d="M0,256L6.2,256C12.3,256,25,256,37,256C49.2,256,62,256,74,240C86.2,224,98,192,111,154.7C123.1,117,135,75,148,69.3C160,64,172,96,185,144C196.9,192,209,256,222,266.7C233.8,277,246,235,258,202.7C270.8,171,283,149,295,117.3C307.7,85,320,43,332,32C344.6,21,357,43,369,58.7C381.5,75,394,85,406,96C418.5,107,431,117,443,122.7C455.4,128,468,128,480,144C492.3,160,505,192,517,218.7C529.2,245,542,267,554,250.7C566.2,235,578,181,591,181.3C603.1,181,615,235,628,218.7C640,203,652,117,665,80C676.9,43,689,53,702,80C713.8,107,726,149,738,170.7C750.8,192,763,192,775,208C787.7,224,800,256,812,256C824.6,256,837,224,849,208C861.5,192,874,192,886,165.3C898.5,139,911,85,923,90.7C935.4,96,948,160,960,202.7C972.3,245,985,267,997,272C1009.2,277,1022,267,1034,240C1046.2,213,1058,171,1071,138.7C1083.1,107,1095,85,1108,96C1120,107,1132,149,1145,165.3C1156.9,181,1169,171,1182,154.7C1193.8,139,1206,117,1218,106.7C1230.8,96,1243,96,1255,128C1267.7,160,1280,224,1292,213.3C1304.6,203,1317,117,1329,85.3C1341.5,53,1354,75,1366,85.3C1378.5,96,1391,96,1403,117.3C1415.4,139,1428,181,1434,202.7L1440,224L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path></svg>
        </div>
        <div class="section-instant" style="color: black">
            <!-- Image - Left -->
            <div>
                <h3 style="color: black">Instant transfers</h3>
            </div>
        </div>
    
        <div class="section-secure">
            <!-- Image - Right -->
            <div>
                <h3 style="color: black;">Secure payment transfer</h3>
            </div>
        </div>
        <div class="section-reliable">
            <!-- Image - Left -->
            <div>
                <h3 style="color: black">Reliable and safe.</h3>
            </div>
        </div>
    </div>
</template>

<script>
import MenuBar from './MenuBar.vue'

export default {
    name: 'Home',
    components: {
        MenuBar
    }
}
</script>

<style scoped>

    .header {
        background: #5865F2;
        width: 100%;
        height: 600px;
    }

    .section-instant {
        color: black;
        width: 100%;
        height: 500px;
        background: #FFF;
    }

    .section-secure {
        color: black;
        width: 100%;
        height: 500px;
        background: #eee;
    }

    .section-reliable {
        color: black;
        width: 100%;
        height: 500px;
        background: #FFF;
    }

    .main {
        margin-right: 25%;
        margin-left: 25%;
        text-align: justify;
        margin-top: 5%;
    }

    
</style>