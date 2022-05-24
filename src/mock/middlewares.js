const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const router = express();
router.use(express.json());
router.use(cors());

const port = 4001;

router.listen(port, () => {
    console.log(`app is running at ${port}`);
});

const mockJson = loadMockJson('./json');

router.get('/cotsReports', (req, res) => {
   return res.status(200).send({...mockJson['combinedAM.json']});
});

function loadMockJson(dir) {
    let mockFiles = {};
    const items = fs.readdirSync(path.resolve(__dirname, dir));
    items.forEach((i) => {
        const item = path.join(path.resolve(__dirname, dir), i);
        const stats = fs.statSync(item);

        if(stats.isFile()){
            const name = path.basename(item);
            try{
                mockFiles[name] = JSON.parse(fs.readFileSync(item));
            }catch(e){

            }
        }

        if(stats.isDirectory()){
            mockFiles = { ...loadMockJson(item), ...mockFiles}
        }
    });

    return mockFiles;
}

module.exports = router;