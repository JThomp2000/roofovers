import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './JobPhotos.css';

const jobs = [
  {
    title: "Before & After",
    description: "Transformation from an old flat roof to a new, clean white membrane roof.",
    images: [
      {
        url: "https://rest.edit.site/filestorage-api-service/b315c23a6dbad745992efb9fd7c58024/beforeflat.jpg",
        caption: "Old Flat Roof (Before)"
      },
      {
        url: "https://rest.edit.site/filestorage-api-service/5783de6e137536f36d54ac1e5b748bf5/afterflat.jpg",
        caption: "New White Membrane (After)"
      }
    ]
  },
  {
    title: "Modular Homes",
    description: "Specialized roofing for modular homes, ensuring a long-lasting, insulated seal.",
    images: [
      {
        url: "https://rest.edit.site/filestorage-api-service/0de9ba6a2684438fa582624108bde4e8/shingle1.jpg",
        caption: "Modular Home w/ White Roof"
      },
      {
        url: "https://rest.edit.site/filestorage-api-service/bb2e3fd161a6c47e5e1040434b7b8769/modular1.jpg",
        caption: "Modular Home Finished Seal"
      }
    ]
  },
  {
    title: "Conventional & Manufactured Homes",
    description: "Permanent roofing solutions for all types of residences.",
    images: [
      {
        url: "https://rest.edit.site/filestorage-api-service/b25627dfd20c8801a622ddc21240b4e3/shingle2.jpg",
        caption: "Conventional Home w/ White Roof"
      },
      {
        url: "https://rest.edit.site/filestorage-api-service/4521fd41bce7024d78622a2b1e1274a4/mh3.jpg",
        caption: "Mobile Home - Durable Insulation"
      }
    ]
  }
];

const JobPhotos: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="jobs" className="job-photos">
      <div className="container">
        <h2 className="section-title">Our Work - Job Photos</h2>
        <p className="section-description">
          Take a look at some of our completed projects and the dramatic transformations our roofing systems provide.
        </p>
        
        <div className="jobs-grid">
          {jobs.map((job, index) => (
            <div key={index} className="job-category">
              <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
              </div>
              <div className="job-images">
                {job.images.map((image, i) => (
                  <div key={i} className="job-image-card">
                    <div className="image-wrapper">
                      <img src={image.url} alt={image.caption} />
                    </div>
                    <div className="image-caption">{image.caption}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="job-photos-footer">
          <Link to="/" className="btn btn-secondary">Back to Home</Link>
          <HashLink smooth to="/#contact" className="btn btn-primary">Request a Free Estimate</HashLink>
        </div>
      </div>
    </section>
  );
};

export default JobPhotos;
