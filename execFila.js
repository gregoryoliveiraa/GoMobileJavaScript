import FilaGoMobile from "FilaGoMobile";

function myWorker(_job) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(_job);
            resolve();
        }, 500);
    })
}

const criarJob = function (body) {
    let id = (Math.random().toString().substr(6, 10));
    return {
        id: id,
        playload: {
            filename: id + '.txt',
            body: body
        }
    }
}

const fila = new FilaGoMobile(myWorker);

fila.addJob(criarJob(
    'Maecenas et metus sapien. Ut lacus augue, viverra laoreet lacus aliquet, feugiat elementum metus. Curabitur nec auctor eros. Fusce vel ornare nisi. Vestibulum pulvinar, nisl vitae sodales efficitur, orci erat elementum urna, ut tincidunt justo nisi eget odio'
));
fila.addJob(criarJob(
    'In hac habitasse platea dictumst. Morbi ac odio nibh. Phasellus ullamcorper elit et ipsum sagittis, ac rutrum orci pellentesque. Donec sed sapien sed enim cursus rutrum. Integer dapibus venenatis tellus'
));
fila.addJob(criarJob(
    'Cras accumsan nunc nibh, id tempus orci elementum et. Curabitur tortor tortor, ornare ut libero nec, volutpat interdum arcu. Nulla pharetra, neque non eleifend bibendum, urna risus blandit turpis'
));
fila.addJob(criarJob(
    'Curabitur sed cursus velit. Praesent vel commodo metus. Integer non mauris enim. Vivamus tellus erat, congue at leo at, condimentum egestas mi.'
));
fila.addJob(criarJob(
    'Maecenas et metus sapien. Ut lacus augue, viverra laoreet lacus aliquet, feugiat elementum metus. Curabitur nec auctor eros. Fusce vel ornare nisi. Vestibulum pulvinar, nisl vitae sodales efficitur, orci erat elementum urna, ut tincidunt justo nisi eget odio'
));
fila.addJob(criarJob(
    'Cras accumsan nunc nibh, id tempus orci elementum et. Curabitur tortor tortor, ornare ut libero nec, volutpat interdum arcu. Nulla pharetra, neque non eleifend bibendum, urna risus blandit turpis'
));
fila.addJob(criarJob(
    'In hac habitasse platea dictumst. Morbi ac odio nibh. Phasellus ullamcorper elit et ipsum sagittis, ac rutrum orci pellentesque. Donec sed sapien sed enim cursus rutrum. Integer dapibus venenatis tellus'
));
fila.addJob(criarJob(
    'Maecenas et metus sapien. Ut lacus augue, viverra laoreet lacus aliquet, feugiat elementum metus. Curabitur nec auctor eros. Fusce vel ornare nisi. Vestibulum pulvinar, nisl vitae sodales efficitur, orci erat elementum urna, ut tincidunt justo nisi eget odio'
));
fila.addJob(criarJob(
    'Cras accumsan nunc nibh, id tempus orci elementum et. Curabitur tortor tortor, ornare ut libero nec, volutpat interdum arcu. Nulla pharetra, neque non eleifend bibendum, urna risus blandit turpis'
));

fila.getJobs;

setTimeout(() => {
    fila.removeJob(fila._getJobs()[1].id);
    fila.removeAllJobs;
}, 1000);
