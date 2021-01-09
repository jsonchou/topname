let myA = $('#j_domainLists').find('tbody').children('tr')
let arr = []
myA.each(function () {
    let ot = $(this).find('a:eq(0)').text().toLowerCase().trim()
    ot && arr.push(ot)
})
window.zaxDomains = arr;


$('#j_domainFilter').on('input', function () {
    var o = $(this)
    var ov = o.val().trim().toLowerCase()
    var myArr = []
    if (ov) {
        window.zaxDomains.forEach(item => {
            if (item.indexOf(ov) > -1) {
                myArr.push(item)
            }
        })
    } else {
        myArr = window.zaxDomains
    }
    //渲染节点
    var str = `<tr class="active">
                    <td style="width: 1%">Index</td>
                    <td style="width: 20%">Domain</td>
                    <td style="width: 40%">Description</td>
                    <td style="width: 5%">link</td>
                </tr>`
    myArr.forEach((item, index) => {
        str += `
                    <tr>
                        <td>${index + 1}</td>
                        <td><a href="//${item}">${item}</a></td>
                        <td>${item.replace('.app', '').toUpperCase()}</td>
                        <td><a href="//${item}">buy</a></td>
                    </tr>`
    })
    $('#j_domainLists').html(str)
})