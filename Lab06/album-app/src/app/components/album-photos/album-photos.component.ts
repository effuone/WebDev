import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css',
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number = 0;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.albumId = id;
        this.loadPhotos(id);
      } else {
        this.error = 'Invalid album ID';
        this.loading = false;
      }
    });
  }

  loadPhotos(albumId: number): void {
    this.loading = true;
    this.albumsService.getAlbumPhotos(albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load photos. Please try again later.';
        this.loading = false;
        console.error('Error loading photos:', err);
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}
