class FilaGoMobile {

    constructor(worker) {
        this.worker = worker;
        this.jobs = [];
    }

    get getJobs() {
        this.worker(this._getJobs());
    }

    get removeAllJobs() {
        this.worker(this._removeAllJobs());
    }

    addJob = function (job) {
        this._addJob(job)
        if (this.jobs.length == 0) {
            exec();
        }
    }

    removeJob = function (id) {
        this.worker(this._removeJob(id));
    }

    _getJobs = function () {
        return this.jobs;
    }

    _addJob = function (job) {
        return this.jobs.push(job);
    }

    _removeJob = function (id) {
        if (!id) {
            throw "Job não enviado!";
        }

        let jobs = this.jobs;
        jobs.forEach(function (item, key) {
            if (item.id === id) {
                jobs.splice(key, 1);
                return;
            }
        });

        return this.jobs;
    }

    _removeAllJobs = function () {
        return this.jobs = [];
    }

    async exec() {
        const currentJob = this.job[0];
        await worker(currentJob);

        this.jobs.shift();
        if (this.jobs.length > 0) {
            await this.exec();
        }
    }
}
