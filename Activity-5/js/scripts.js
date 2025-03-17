var data = [
    {
        name: 'MyHowTo',
        description: 'Create engaging, easy to follow content to guide your audience towards new skills and knowledge!',
        author: 'james',
        url: 'https://www.motionvfx.com/store,mhowto-dvr,p4602.html',
        downloads: 200735,
        stars: 1587,
        price: 99.00,
        selector: 'p1'
    },
    {
        name: 'mTuber 4',
        description: 'Save loads of time (and nerves!) thanks to top-quality presets and effects just a drag & drop away from your timeline!',
        author: 'ben',
        url: 'https://www.motionvfx.com/store,mtuber-4-dvr,p4608.html',
        downloads: 164297,
        stars: 2154,
        price: 109.00,
        selector: 'p2'
    }
];

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = funtion() ;{
        return this.downloads.toLocaleString();
    };

    this.FormattedStars = funtion() ;{
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getEl = function(id) {
    return document.getElementById(id);
}

var writePackageInfo = function(package) {
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEL = getEl(selector + '-description'),
    authEl = getEl(selector + '-author'),
    downloadEL = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    nameEl.textContent = package.name;
    descEL.textContent = package.description;
    authEl.textContent = package.author;
    downloadEL.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
}

var init = function() {
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var  james = new Package(data[0]);
    writePackageInfo(james);

    var ben = new Package(date[1]);
    writePackageInfo(ben);
}

init();