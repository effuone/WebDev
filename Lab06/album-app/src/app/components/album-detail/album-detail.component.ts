import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading: boolean = true;
  error: string | null = null;
  albumForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService,
    private fb: FormBuilder
  ) {
    this.albumForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('id'));
      if (albumId) {
        this.loadAlbumDetails(albumId);
      } else {
        this.error = 'Invalid album ID';
        this.loading = false;
      }
    });
  }

  loadAlbumDetails(id: number): void {
    this.loading = true;
    this.albumsService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.albumForm.setValue({ title: data.title });
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load album details. Please try again later.';
        this.loading = false;
        console.error('Error loading album details:', err);
      },
    });
  }

  saveAlbum(): void {
    if (this.albumForm.valid && this.album) {
      const updatedAlbum: Album = {
        ...this.album,
        title: this.albumForm.value.title,
      };

      this.albumsService.updateAlbum(updatedAlbum).subscribe({
        next: (data) => {
          this.album = data;
          alert('Album updated successfully');
        },
        error: (err) => {
          console.error('Error updating album:', err);
          alert('Failed to update album. Please try again later.');
        },
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
