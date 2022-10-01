import { Component, OnInit } from '@angular/core';

export interface AboutElement {
  mssv: number,
  name: string,
}

const TEAM_INFO: AboutElement[] = [
  {mssv: 51900842, name: "Lê Quốc Trung"},
  {mssv: 51900784, name: "Nguyễn Hữu Đăng"},
  {mssv: 51900829, name: "Đào Nhật Tân"},
  {mssv: 51900340, name: "Nguyễn Lê Sông Hương"},
  {mssv: 51900836, name: "Lâm Minh Thông"},
  {mssv: 51703225, name: "Hồ Văn Vũ"},
]

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  displayedColumns: String[] = ['mssv', 'name'];
  dataSource = TEAM_INFO;
  constructor() { }

  ngOnInit(): void {
  }

}
