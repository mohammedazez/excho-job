package jobs

import (
	"excho-job/entity"
)

type Service interface{
	GetAllJobs() ([]JobsFormat, error)
	SaveNewJob(job entity.JobInput) (JobsFormat, error)
}

type service struct{
	repository Repository
}

func NewService(repo Repository) *service{
	return &service{repo}
}

func(s *service) GetAllJobs()([]JobsFormat, error){
	jobs, err := s.repository.FindAll()

	var formatJobs []JobsFormat

	for _, job := range jobs {
		formatJob := FormatJob(job)
		formatJobs = append(formatJobs, formatJob)
	}

	if err != nil {
		return formatJobs, err
	}
	return formatJobs, nil
}

func(s *service) SaveNewJob(job entity.JobInput) (JobsFormat, error) {

	var newJob = entity.Job{
		CompanyName: job.CompanyName,
		Address: job.Address,
		Industry: job.Industry,
		JobTittle: job.JobTittle,
		Salary: job.Salary,
		Type: job.Type,
		JobDescription: job.JobDescription,
		Requirements: job.Requirements,
		Skills: job.Skills,
	}

	createJobSeeker, err := s.repository.Create(newJob)

	formatJob := FormatJob(createJobSeeker)
	if err != nil {
		return formatJob, err
	}
	return formatJob, nil
}