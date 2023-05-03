if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/Almadina/.gradle/caches/transforms-3/8aff0a570c50a0379e51d7ad4503e6e7/transformed/jetified-hermes-android-0.71.4-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/Almadina/.gradle/caches/transforms-3/8aff0a570c50a0379e51d7ad4503e6e7/transformed/jetified-hermes-android-0.71.4-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

