import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-remote-ai',
	standalone: true,
	template: `
		<div>
    some magic ai
      <div>{{content}}</div>
		</div>
	`,
})
export class AiComponent implements OnInit {
	content = "listening ..";
  
  ngOnInit(): void {
    document.body.addEventListener('doc-send', (evt: any) => {
      console.log(evt)
      this.content = `abracadabra ${evt.detail.label}`;
    });
  }
}
