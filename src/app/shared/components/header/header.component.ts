import { Component, OnInit, Inject, ChangeDetectorRef, AfterViewInit } from "@angular/core";
import { NavService } from "../../services/nav.service";
import { LayoutService } from "../../services/layout.service";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { DOCUMENT } from '@angular/common';

SwiperCore.use([Navigation, Pagination, Autoplay]);
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public elem: any;

  constructor(
    public layout: LayoutService,
    public navServices: NavService,
    @Inject(DOCUMENT) private document: Document,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.elem = this.document.documentElement;
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges(); // Forza la actualización del layout
  }

  sidebarToggle(): void {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
    this.navServices.megaMenu = false;
    this.navServices.levelMenu = false;
  }

  layoutToggle(): void {
    if (this.layout.config.settings.layout_version === "dark-only") {
      this.document.body.classList.toggle("dark-only");
    }
  }

  searchToggle(): void {
    this.navServices.search = true;
  }

  languageToggle(): void {
    this.navServices.language = !this.navServices.language;
  }

  async toggleFullScreen(): Promise<void> {
    this.navServices.fullScreen = !this.navServices.fullScreen;
  
    try {
      if (this.navServices.fullScreen) {
        // Entrar en pantalla completa
        if (this.elem.requestFullscreen) {
          await this.elem.requestFullscreen();
        } else if (this.elem.mozRequestFullScreen) {
          await this.elem.mozRequestFullScreen(); // Firefox
        } else if (this.elem.webkitRequestFullscreen) {
          await this.elem.webkitRequestFullscreen(); // Chrome, Safari y Opera
        } else if (this.elem.msRequestFullscreen) {
          await this.elem.msRequestFullscreen(); // IE/Edge
        }
      } else {
        // Salir de pantalla completa
        if (this.document.exitFullscreen) {
          await this.document.exitFullscreen();
        } else if ((this.document as any).mozCancelFullScreen) {
          await (this.document as any).mozCancelFullScreen(); // Firefox
        } else if ((this.document as any).webkitExitFullscreen) {
          await (this.document as any).webkitExitFullscreen(); // Chrome, Safari y Opera
        } else if ((this.document as any).msExitFullscreen) {
          await (this.document as any).msExitFullscreen(); // IE/Edge
        }
      }
    } catch (error) {
      console.error("Error al cambiar el modo de pantalla completa:", error);
    }
  }
}
