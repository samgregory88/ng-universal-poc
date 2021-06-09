import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO Integration, On-Demand Rankings, Radius' },
      { name: 'author', content: 'EG' },

      { property: 'og:title', content: "Social Media Sharing Test" },
      { property: 'og:type', content: "article" },
      { property: 'og:description', content: "A test to see if angular univeral works as expected" },
      { property: 'og:image', content: "https://ssir.org/images/blog/Hollie-Russon-Gilman-civic-engagement-social-distancing-592x333.jpg" },

      { name: 'twitter:card', content: "summary_large_image" },
      { name: 'twitter:title', content: "Social Media Sharing Test" },
      { name: 'twitter:description', content: "A test to see if angular univeral works as expected" },
      { name: 'twitter:image', content: "https://ssir.org/images/blog/Hollie-Russon-Gilman-civic-engagement-social-distancing-592x333.jpg" },
    ]);
  }

}
