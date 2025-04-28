import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Property {
  type: string;
  price: string;
  location: string;
  image: string; // Nueva propiedad para la imagen
}

@Component({
  selector: 'app-carousel',
  imports: [NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  title = 'Explora nuestras propiedades exclusivas.';
  subtitle = 'Las propiedades que buscás, en un solo lugar';

  properties: Property[] = [
    { 
      type: 'Departamento', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad1.jpg' 
    },
    { 
      type: 'PH', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad2.jpg' 
    },
    { 
      type: 'Departamento', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad3.jpg' 
    },
    { 
      type: 'PH', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad4.jpg' 
    },
    { 
      type: 'Casa', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad1.jpg' 
    },
    { 
      type: 'Casa', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad4.jpg' 
    },
    { 
      type: 'Departamento', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad3.jpg' 
    },
    { 
      type: 'PH', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad2.jpg' 
    },
    { 
      type: 'Departamento', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad1.jpg' 
    },
    { 
      type: 'Casa', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad3.jpg' 
    },
    { 
      type: 'Departamento', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad2.jpg' 
    },
    { 
      type: 'Departamento', 
      price: 'USD 800', 
      location: 'Av. Los álamos 1440 Rosario',
      image: 'assets/carousel/propiedad4.jpg' 
    }
    // Continúa con las demás propiedades...
    // Puedes generar esto dinámicamente si tienes un patrón de nombres
  ];

  currentPage = 0;
  itemsPerPage = 4;

  get totalPages(): number {
    return Math.ceil(this.properties.length / this.itemsPerPage);
  }

  get paginatedProperties(): any[] {
    const start = this.currentPage * this.itemsPerPage;
    return this.properties.slice(start, start + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }


}
