package com.ssafy.beauduckmakeup.repository;
import com.ssafy.beauduckmakeup.entity.MemberEntity;
import com.ssafy.beauduckmakeup.entity.MemberGalleryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberGalleryRepository extends JpaRepository<MemberGalleryEntity, Integer> {
    List<MemberGalleryEntity> findAllByMemberEntityAndIsActiveTrue(MemberEntity memberEntity);
    Optional<MemberGalleryEntity> findOneByMemberEntity(MemberEntity memberEntity);
}
